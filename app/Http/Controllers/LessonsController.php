<?php

namespace App\Http\Controllers;

use App\Services\UserSettings;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\UserProgress;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use App\Models\Lesson;

class LessonsController extends Controller
{

    function index(): Response
    {
        $userSettings = new UserSettings;
        $exerciseLanguage = $userSettings->getExerciseLang();
        $lessons = Cache::rememberForever('lessons' . $exerciseLanguage, function () use ($exerciseLanguage) {
            return Lesson::where('locale', $exerciseLanguage)->where('active', true)->with('exercises.screens.userProgress')->get();
        });

        $daily_time = $userSettings->getDailyTime();
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
            'lessons' => $lessons,
            'locale' => app()->getLocale(),
            'daily_time' => $daily_time,
            'sumTime' => $sumTime,
            'avgSpeed' => $avgSpeed,
            'avgAccuracy' => $avgAccuracy,
            'todaySumTime' => $todaySumTime,
        ]);
    }
}
