<?php

namespace App\Services;

use App\Models\UserProgress;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class UserProgressService
{
    private $guestUserId;
    private ?array $aggregates = null;

    public function __construct()
    {
        $this->guestUserId = Session::get('guest_user_id');
    }
    private function ensureAggregatesComputed(): void
    {
        if ($this->aggregates !== null) {
            return;
        }

        $userSettings = new UserSettingsService;
        $locale = $userSettings->getExerciseLang();

        if (Auth::check()) {
            $userId = auth()->id();
            $today = Carbon::today()->toDateString();

            $stats = UserProgress::query()
                ->where('user_id', $userId)
                ->where('locale', $locale)
                ->selectRaw('
                    COALESCE(SUM(time), 0) as total_time,
                    COALESCE(AVG(typing_speed), 0) as avg_speed,
                    COALESCE(AVG(accuracy_percentage), 0) as avg_accuracy,
                    COALESCE(SUM(CASE WHEN DATE(created_at) = ? THEN time ELSE 0 END), 0) as today_time
                ', [$today])
                ->first();

            $this->aggregates = [
                'total_time' => (float) $stats->total_time,
                'today_time' => (float) $stats->today_time,
                'avg_speed' => (float) $stats->avg_speed,
                'avg_accuracy' => (float) $stats->avg_accuracy,
            ];
        } elseif ($this->guestUserId) {
            $progressData = session('progress_' . $this->guestUserId, []);

            $currentDate = Carbon::today()->format('Y-m-d');
            $totalTime = 0;
            $todayTime = 0;
            $typingSpeedSum = 0;
            $typingSpeedCount = 0;
            $accuracySum = 0;
            $accuracyCount = 0;

            if ($progressData) {
                foreach ($progressData as $outerArray) {
                    if (!is_array($outerArray)) {
                        continue;
                    }

                    foreach ($outerArray as $entry) {
                        if (!is_array($entry) || ($entry['locale'] ?? null) !== $locale) {
                            continue;
                        }

                        if (isset($entry['time'])) {
                            $totalTime += $entry['time'];

                            if (isset($entry['created_at'])) {
                                $entryDate = date('Y-m-d', strtotime($entry['created_at']));
                                if ($entryDate === $currentDate) {
                                    $todayTime += $entry['time'];
                                }
                            }
                        }

                        if (isset($entry['typing_speed'])) {
                            $typingSpeedSum += $entry['typing_speed'];
                            $typingSpeedCount++;
                        }

                        if (isset($entry['accuracy_percentage'])) {
                            $accuracySum += $entry['accuracy_percentage'];
                            $accuracyCount++;
                        }
                    }
                }
            }

            $this->aggregates = [
                'total_time' => $totalTime,
                'today_time' => $todayTime,
                'avg_speed' => $typingSpeedCount > 0 ? $typingSpeedSum / $typingSpeedCount : 0,
                'avg_accuracy' => $accuracyCount > 0 ? $accuracySum / $accuracyCount : 0,
            ];
        } else {
            $this->aggregates = [
                'total_time' => 0,
                'today_time' => 0,
                'avg_speed' => 0,
                'avg_accuracy' => 0,
            ];
        }
    }



    public function getTodaySumTime()
    {
        $this->ensureAggregatesComputed();

        return $this->formatTime((int) round($this->aggregates['today_time'] ?? 0));
    }

    // Helper function to format time in "hours:minutes:seconds" format
    function formatTime($seconds)
    {
        $carbonTime = Carbon::createFromTimestamp($seconds);
        if ($carbonTime->hour < 1) {
            return $carbonTime->format('i:s');
        } else {
            return $carbonTime->format('H:i:s');
        }
    }

    public function getSumTime()
    {
        $this->ensureAggregatesComputed();

        return $this->aggregates['total_time'] ?? 0;
    }


    public function getAvgSpeed()
    {
        $this->ensureAggregatesComputed();

        return $this->aggregates['avg_speed'] ?? 0;
    }

    public function getAvgAccuracy()
    {
        $this->ensureAggregatesComputed();

        return $this->aggregates['avg_accuracy'] ?? 0;
    }


    public function setProgress(Request $request)
    {
        // we need this check here to create the data with the user id
        $data = $request->all();

        if (Auth::check()) {
            $data['user_id'] = auth()->user()->id;
            UserProgress::create($data);
        } else {
            // Check if a guest user ID already exists in the session
            $guestUserId = session('guest_user_id');

            if (!$guestUserId) {
                // Generate a unique identifier for the guest user
                $guestUserId = Str::uuid()->toString();

                // Store the guest user ID in the session
                session(['guest_user_id' => $guestUserId]);
            }

            // Retrieve the existing progress data for the guest user (if any)
            $progressData = session('progress_' . $guestUserId, []);

            // Extract the screen ID from the request
            $screenId = $request->input('screen_id');

            // Add the "created_at" timestamp to the request data
            $requestData = $request->all();
            $requestData['created_at'] = Carbon::now();

            // Add the current progress data to the specific screen's array
            if (!isset($progressData[$screenId])) {
                $progressData[$screenId] = [];
            }
            $progressData[$screenId][] = $requestData;

            // Store the updated progress data back in the session
            session(['progress_' . $guestUserId => $progressData]);
        }
    }
}
