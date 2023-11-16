<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessCertificate;
use App\Jobs\SaveBadge;
use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Services\UserProgressService;
use App\Services\UserSettingsService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;

class LessonController extends Controller
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

    public function challenge(Screen $screen): Response
    {
        $nextScreen = Screen::where('id', $screen->id + 1)->first();
        if ($screen->content_type == 'letters') {
            $prevScreen = Screen::where('id', $screen->id - 1)->first();
            $exerciseTotalStars = 3;
            return Inertia::render('Typing/ExercisePage', [
                'screen' => $screen,
                'exerciseTotalStars' => $exerciseTotalStars,
                'prevScreen' => $prevScreen,
                'nextScreen' => $nextScreen
            ]);
        } elseif ($screen->content_type == 'badge') {
            $exercise = Exercise::find($screen->exercise_id);

            if (auth()->check()) {
                //save badge
                SaveBadge::dispatch($screen->title, $screen->locale);
            }

            return Inertia::render('Typing/BadgePage', [
                'exerciseName' => $screen->title,
                'starsEarned' => $exercise->totalStarsEarned,
                'exerciseTotalStars' => $exercise->exerciseTotalStars,
                'avgSpeed' => $exercise->avgSpeed,
                'avgAccuraccy' => $exercise->avgAccuracy,
                'sumTime' => $exercise->sumTime,
                'nextScreen' => $nextScreen
            ]);
        } else {
            // if we reached here it means the screen is "intro" or "sentences"
            // on the frontend we deal with it by showing different screens
            // then we need to show next screen instead of current screen
            // and for the next screen we plus it by 2
            // and for the prev screen we show current screen
            // it's very complicated just don't touch it 😊
            $nextScreenPlusTwo = $screen->content_type === "sentences" ? Screen::where('id', $screen->id + 1)->first() : Screen::where('id', $screen->id + 2)->first();
            $prevScreen = Screen::where('id', $screen->id - 1)->first();
            $exerciseTotalStars = 3;
            return Inertia::render('Typing/ExercisePage', [
                'screen' => $nextScreen->content_type == "badge" ? $screen : $nextScreen,
                'exerciseTotalStars' => $exerciseTotalStars,
                'prevScreen' => $screen,
                'nextScreen' => $nextScreenPlusTwo
            ]);
        }
    }

    public function test(): Response
    {
        $testScreen = Screen::where('content_type', 'test')->where('locale', app()->getLocale())->inRandomOrder()->first();
        return Inertia::render('Typing/ExercisePage', [
            'screen' => $testScreen,
        ]);
    }


    public function saveProgress(Request $request)
    {
        $userProgressService = new UserProgressService;

        $userProgressService->setProgress($request);

        // check if user reached last screen in the current exercise
        $screen = Screen::find($request->screen_id);

        if ($screen->content_type == 'letters') {
            $lesson = Lesson::find($request->lesson_id); // Replace $lessonId with the ID of the lesson you're interested in.

            $exercise = $lesson->exercises->last();

            $latestScreenId = $exercise->screens->filter(function ($screen) {
                return $screen->content_type === 'letters';
            })->last()->id;

            // check if user reached last screen in the current exercise
            if ($latestScreenId === $request->screen_id) {
                // User has reached the last exercise of at least one level
                //run the job
                ProcessCertificate::dispatch($screen, $lesson);
            }
        }
    }
}
