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

    public function __construct()
    {
        $this->guestUserId = Session::get('guest_user_id');
    }

    public function getTodaySumTime()
    {
        $userSettings = new UserSettings;
        if (Auth::check()) {
            $userProgressToday = UserProgress::where('user_id', auth()->id())
                ->whereDate('created_at', Carbon::today())
                ->where('locale', $userSettings->getExerciseLang())
                ->select('time')
                ->get();

            $todayTime = $userProgressToday->sum('time');

            return $this->formatTime($todayTime);
        } else {
            if ($this->guestUserId) {
                $progressData = session('progress_' . $this->guestUserId);

                // Get the current date in 'Y-m-d' format
                $currentDate = Carbon::today()->format('Y-m-d');

                // Initialize a variable to store the sum of time for today
                $totalTimeToday = 0;

                // Loop through the data
                foreach ($progressData as $outerArray) {
                    if (is_array($outerArray)) {
                        foreach ($outerArray as $innerArray) {
                            if (isset($innerArray['created_at']) && $innerArray['locale'] === $userSettings->getExerciseLang()) {
                                // Get the date part from the "created_at" timestamp
                                $entryDate = date('Y-m-d', strtotime($innerArray['created_at']));

                                // Check if the entry is from today
                                if ($entryDate === $currentDate) {
                                    // Add the "time" value to the total for today
                                    $totalTimeToday += $innerArray['time'];
                                }
                            }
                        }
                    }
                }

                return $this->formatTime($totalTimeToday);
            }
        }
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
        $userSettings = new UserSettings;
        if (Auth::check()) {
            $userProgress = UserProgress::where('user_id', auth()->id())
                ->where('locale', $userSettings->getExerciseLang())
                ->select('time', 'typing_speed', 'accuracy_percentage')
                ->get();

            $sumTime = $userProgress->sum('time');

            return $sumTime;
        } else {
            if ($this->guestUserId) {
                $progressData = session('progress_' . $this->guestUserId);

                // Initialize a variable to store the sum of time
                $totalTime = 0;

                // Loop through the outer array
                foreach ($progressData as $outerArray) {
                    // Check if the outer array is an array
                    if (is_array($outerArray)) {
                        // Loop through the inner arrays
                        foreach ($outerArray as $innerArray) {
                            if (isset($innerArray['time']) && $innerArray['locale'] === $userSettings->getExerciseLang()) {
                                // Add the "time" value to the total time for the specified locale
                                $totalTime += $innerArray['time'];
                            }
                        }
                    }
                }
                return $totalTime;
            }
        }
    }


    public function getAvgSpeed()
    {
        $userSettings = new UserSettings;
        if (Auth::check()) {
            $userProgress = UserProgress::where('user_id', auth()->id())->where('locale', $userSettings->getExerciseLang())->select('time', 'typing_speed', 'accuracy_percentage')->get();
            $avgSpeed = $userProgress->avg('typing_speed');
            return $avgSpeed;
        } else {
            if ($this->guestUserId) {
                $progressData = session('progress_' . $this->guestUserId);

                $averageTypingSpeed = 0;

                $typingSpeedSum = 0;
                $typingSpeedCount = 0;

                foreach ($progressData as $screenData) {
                    foreach ($screenData as $entry) {
                        if (isset($entry['typing_speed']) && $entry['locale'] === $userSettings->getExerciseLang()) {
                            // Add the typing_speed value to the sum
                            $typingSpeedSum += $entry['typing_speed'];
                            // Increment the count
                            $typingSpeedCount++;
                        }
                    }
                }

                // Calculate the average typing_speed
                if ($typingSpeedCount > 0) {
                    $averageTypingSpeed = $typingSpeedSum / $typingSpeedCount;
                } else {
                    // Handle the case when there are no typing_speed entries
                    $averageTypingSpeed = 0;
                }

                return $averageTypingSpeed;
            }
        }
    }

    public function getAvgAccuracy()
    {
        $userSettings = new UserSettings;
        if (Auth::check()) {
            $userProgress = UserProgress::where('user_id', auth()->id())
                ->where('locale', $userSettings->getExerciseLang())
                ->select('time', 'typing_speed', 'accuracy_percentage')
                ->get();

            $avgAccuracy = $userProgress->avg('accuracy_percentage');

            return $avgAccuracy;
        } else {
            if ($this->guestUserId) {
                $progressData = session('progress_' . $this->guestUserId);

                $averageTypingAccuracy = 0;

                $typingAccuracySum = 0;
                $typingAccuracyCount = 0;

                foreach ($progressData as $screenData) {
                    foreach ($screenData as $entry) {
                        if (isset($entry['accuracy_percentage']) && $entry['locale'] === $userSettings->getExerciseLang()) {
                            // Add the accuracy_percentage value to the sum
                            $typingAccuracySum += $entry['accuracy_percentage'];
                            // Increment the count
                            $typingAccuracyCount++;
                        }
                    }
                }

                // Calculate the average accuracy_percentage
                if ($typingAccuracyCount > 0) {
                    $averageTypingAccuracy = $typingAccuracySum / $typingAccuracyCount;
                } else {
                    // Handle the case when there are no accuracy_percentage entries for the given locale
                    $averageTypingAccuracy = 0;
                }

                return $averageTypingAccuracy;
            }
        }
    }


    public function setProgress(Request $request)
    {

        $data = $request->validate([
            'lesson_id' => 'required',
            'exercise_id' => 'required',
            'screen_id' => 'required',
            'locale' => 'required',
            'typing_speed' => 'required',
            'accuracy_percentage' => 'required',
            'stars_earned' => 'required',
            'time' => 'required',
        ]);

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
