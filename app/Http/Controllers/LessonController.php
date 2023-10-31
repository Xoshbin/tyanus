<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessCertificate;
use App\Jobs\SaveBadge;
use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Services\UserProgressService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;

class LessonController extends Controller
{
    public function challenge(Screen $screen): Response
    {
        $nextScreen = Screen::where('id', $screen->id + 1)->first();

        if ($screen->content_type == 'letters') {
            $exerciseTotalStars = 3;
            return Inertia::render('Typing/ExercisePage', [
                'screen' => $screen,
                'exerciseTotalStars' => $exerciseTotalStars,
                'nextScreen' => $nextScreen
            ]);
        } elseif ($screen->content_type == 'badge') {
            $exercise = Exercise::find($screen->exercise_id);

            //save badge
            SaveBadge::dispatch($screen->title, $screen->locale);

            return Inertia::render('Typing/BadgePage', [
                'exerciseName' => $screen->title,
                'starsEarned' => $exercise->totalStarsEarned,
                'exerciseTotalStars' => $exercise->exerciseTotalStars,
                'avgSpeed' => $exercise->avgSpeed,
                'avgAccuraccy' => $exercise->avgAccuracy,
                'sumTime' => $exercise->sumTime,
                'nextScreen' => $nextScreen
            ]);
        }
    }

    public function test(): Response
    {
        return 'test';
    }


    public function saveProgress(Request $request)
    {
        $userProgressService = new UserProgressService;

        $userProgressService->setProgress($request);

        // check if user reached last screen in the current exercise
        $lesson = Lesson::find($request->lesson_id); // Replace $lessonId with the ID of the lesson you're interested in.


        $exercise = $lesson->exercises->last();

        $screen = Screen::find($request->screen_id);

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
