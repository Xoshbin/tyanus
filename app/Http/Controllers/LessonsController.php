<?php

namespace App\Http\Controllers;

use App\Services\UserSettings;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\UserProgress;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use App\Models\Lesson;
use App\Services\UserProgressService;

class LessonsController extends Controller
{

    function index(): Response
    {
        $userSettings = new UserSettings;
        $userProgressService = new UserProgressService;
        $exerciseLanguage = $userSettings->getExerciseLang();
        $lessons = Cache::rememberForever('lessons' . $exerciseLanguage, function () use ($exerciseLanguage) {
            return Lesson::where('locale', $exerciseLanguage)->where('active', true)->with('exercises.screens.userProgress')->get();
        });

        $daily_time = $userSettings->getDailyTime();

        $todaySumTime = $userProgressService->getTodaySumTime();
        $sumTime = $userProgressService->getSumTime();
        $avgSpeed = $userProgressService->getAvgSpeed();
        $avgAccuracy = $userProgressService->getAvgAccuracy();

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
