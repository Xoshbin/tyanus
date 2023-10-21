<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\UserProgress;
use Carbon\Carbon;

class LessonsController extends Controller
{
    function index(): Response
    {
        $locale = app()->getLocale();
        $daily_time = auth()->user()->settings['daily_time'] ?? 15;
        $userProgress = UserProgress::where('user_id', auth()->id())->select('time', 'typing_speed', 'accuracy_percentage')->get();
        $userProgressToday = UserProgress::where('user_id', auth()->id())->whereDate('created_at', Carbon::today())->select('time')->get();

        $todayTime = $userProgressToday->sum('time');

        // Create a Carbon instance from the counter time in seconds
        $carbonTime = Carbon::createFromTimestamp($todayTime);
        // Check if the duration is less than an hour
        if ($carbonTime->hour < 1) {
            // Format the Carbon instance to display in "minutes:seconds" format
            $todaySumTime = $carbonTime->format('i:s');
        } else {
            // Format the Carbon instance to display in "hours:minutes:seconds" format
            $todaySumTime = $carbonTime->format('H:i:s');
        }

        $sumTime = $userProgress->sum('time');
        $avgSpeed = $userProgress->avg('typing_speed');
        $avgAccuracy = $userProgress->avg('accuracy_percentage');

        return Inertia::render('Typing/Lessons', [
            'locale' => $locale,
            'daily_time' => $daily_time,
            'sumTime' => $sumTime,
            'avgSpeed' => $avgSpeed,
            'avgAccuracy' => $avgAccuracy,
            'todaySumTime' => $todaySumTime
        ]);
    }
}
