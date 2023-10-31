<?php

namespace App\Models;

use Carbon\Carbon;
use Carbon\CarbonInterval;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\App;

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
        return $this->hasMany(Screen::class)->where('content_type', 'letters');
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


    /*
    Get total stars earned per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */
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

    /*
    Get average speed earned per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */

    public function getAvgSpeedAttribute()
    {
        $userProgress = UserProgress::where('user_id', auth()->id())
            ->where('exercise_id', $this->id)->select('typing_speed')->get();
        $avgSpeed = $userProgress->avg('typing_speed');
        return $avgSpeed;
    }

    /*
    Get average accuracy earned per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */

    public function getAvgAccuracyAttribute()
    {
        $userProgress = UserProgress::where('user_id', auth()->id())
            ->where('exercise_id', $this->id)->select('accuracy_percentage')->get();
        $avgAccuracy = $userProgress->avg('accuracy_percentage');
        return $avgAccuracy;
    }


    /*
    Get summery of time per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */
    public function getSumTimeAttribute()
    {
        $userProgress = UserProgress::where('user_id', auth()->id())
            ->where('exercise_id', $this->id)->select('time')->get();
        $sumTime = $userProgress->sum('time');
        $carbonTime = CarbonInterval::seconds($sumTime)->locale(App::getLocale() == 'ckb' ? 'ckb' : 'en')->cascade()->forHumans();
        return $carbonTime;
    }
}
