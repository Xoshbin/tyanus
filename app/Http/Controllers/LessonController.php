<?php

namespace App\Http\Controllers;

use App\Jobs\SaveBadge;
use App\Models\Exercise;
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
    }
}
