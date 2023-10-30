<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Exercise extends Model
{
    use HasFactory;


    // protected $with = ['screens'];

    //in inertia react, you have to load the accessors at the beginning otherwise the accessors not going down to the react or js
    protected $appends = array('isExerciseFinished', 'isHalfwayThroughExercise', 'totalStarsEarned', 'exerciseTotalStars');


    protected $fillable = ['lesson_id', 'title', 'target_speed'];

    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Lesson::class);
    }

    public function screens(): HasMany
    {
        return $this->hasMany(Screen::class);
    }

    public function userProgress(): HasMany
    {
        return $this->hasMany(UserProgress::class);
    }

    public function getIsExerciseFinishedAttribute()
    {
        // Assuming you want to check if all screens in the exercise are completed by the user.
        $totalScreens = $this->screens->count();

        // Instead of querying directly, you can use the userProgress relationship to simplify the logic.
        $uniqueScreensPlayedCount = $this->userProgress()
            ->where('user_id', auth()->id())
            ->distinct()
            ->count('screen_id');

        return $uniqueScreensPlayedCount >= $totalScreens;
    }

    public function getExerciseTotalStarsAttribute()
    {
        // Assuming you want to check if all screens in the exercise are completed by the user.
        $totalScreens = $this->screens->where('content_type', 'letters')->count();

        return $totalScreens * 3;
    }

    public function getIsHalfwayThroughExerciseAttribute()
    {
        // Use the userProgress relationship to check if the user has played at least one screen
        $userProgress = $this->userProgress()
            ->where('user_id', auth()->id())
            ->distinct()
            ->first(); // Get the first matching user progress

        return $userProgress !== null;
    }

    public function getTotalStarsEarnedAttribute()
    {
        $uniqueScreensPlayed = UserProgress::where('user_id', auth()->id())
            ->where('exercise_id', $this->id) // Assuming 'id' is the correct attribute name for the exercise
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


        return $uniqueScreensPlayed->sum('stars_earned');
    }
}
