<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
use App\Models\Screen;
use App\Models\UserProgress;
use Illuminate\Http\Request;

class LessonCardComtroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $lessonId, Exercise $exercise)
    {
        //?can't cache it, it creates a bug so don't cache it
        $totalScreens = Screen::where('lesson_id', $lessonId)->where('content_type', 'letters')->where('exercise_id', $exercise->id)->count();

        //? each screen have 3 stars that can be earned
        $exerciseTotalStars = $totalScreens * 3;
        $uniqueScreensPlayed = UserProgress::where('user_id', auth()->id())
            ->where('lesson_id', $lessonId)
            ->where('exercise_id', $exercise->id)
            ->where(function ($query) {
                // Subquery to get the latest completed_at for each screen_id
                $query->whereRaw('completed_at = (
            SELECT MAX(completed_at)
            FROM user_progress AS up
            WHERE up.user_id = user_progress.user_id
            AND up.lesson_id = user_progress.lesson_id
            AND up.exercise_id = user_progress.exercise_id
            AND up.screen_id = user_progress.screen_id
        )');
            })
            ->groupBy('screen_id')
            ->get();

        $totalStarsEarned = $uniqueScreensPlayed->sum('stars_earned');

        $sumTime = $uniqueScreensPlayed->sum('time');
        $avgSpeed = $uniqueScreensPlayed->avg('typing_speed');
        $avgAccuracy = $uniqueScreensPlayed->avg('accuracy_percentage');

        // Get the number of unique screens the user has played
        $uniqueScreensPlayed = $uniqueScreensPlayed->pluck('screen_id');

        //get all the screens the player played ordering by order field
        $lastPlayedScreenOrder = Screen::whereIn('id', $uniqueScreensPlayed)
            ->where('lesson_id', $lessonId)
            ->where('exercise_id', $exercise->id)
            ->max('order');

        // Find the next screen by the order
        $nextScreenOrder = $lastPlayedScreenOrder + 1;

        // Get the next screen for the user to continue
        $screenToContinue = Screen::where('order', $nextScreenOrder)
            ->where('lesson_id', $lessonId)
            ->where('exercise_id', $exercise->id)
            ->pluck('id')
            ->first();

        $uniqueScreensPlayedCount = $uniqueScreensPlayed->count();

        // Check if the user is halfway through the exercise
        $isHalfwayThroughExercise = $uniqueScreensPlayedCount >= 1;

        // Check if user finished all the screens in the exercise
        $isExerciseFinished = $uniqueScreensPlayedCount >= $totalScreens;

        return response()->json([
            'isExerciseFinished' => $isExerciseFinished,
            'exercise' => $exercise,
            'isHalfwayThroughExercise' => $isHalfwayThroughExercise,
            'screenToContinue' => $screenToContinue,
            'exerciseTotalStars' => $exerciseTotalStars,
            'totalStarsEarned' => $totalStarsEarned,
            'avgSpeed' => $avgSpeed,
            'avgAccuracy' => $avgAccuracy,
            'sumTime' => $sumTime,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
