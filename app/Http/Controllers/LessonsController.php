<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;
use App\Models\Lesson;
use App\Services\UserProgressService;
use App\Services\UserSettingsService;

class LessonsController extends Controller
{

    function index(): Response
    {
        $userSettings = new UserSettingsService;
        $userProgressService = new UserProgressService;
        $exerciseLanguage = $userSettings->getExerciseLang();
        // dd($exerciseLanguage);
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
            'daily_time' => $daily_time,
            'sumTime' => $sumTime,
            'avgSpeed' => $avgSpeed,
            'avgAccuracy' => $avgAccuracy,
            'todaySumTime' => $todaySumTime,
        ]);
    }
}
