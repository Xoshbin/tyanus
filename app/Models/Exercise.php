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
        return $this->hasMany(Screen::class)->whereIn('content_type', ['letters', 'sentences']);
    }

    public function userProgress(): HasMany
    {
        return $this->hasMany(UserProgress::class);
    }

    public function getIsExerciseFinishedAttribute()
    {
        $userId = auth()->id();

        if (!$userId) {
            return false;
        }

        // When the exercise has its screens and their user progress preloaded,
        // compute everything in memory to avoid N+1 queries.
        if ($this->relationLoaded('screens') && $this->screens->every(function ($screen) {
            return $screen->relationLoaded('userProgress');
        })) {
            $screens = $this->screens;
            $totalScreens = $screens->count();

            if ($totalScreens === 0) {
                return false;
            }

            $uniqueScreensPlayedCount = $screens->filter(function ($screen) use ($userId) {
                return $screen->userProgress->contains('user_id', $userId);
            })->count();

            return $uniqueScreensPlayedCount >= $totalScreens;
        }

        // Fallback to the original aggregate query if relations are not loaded.
        $totalScreens = $this->screens()->count();

        $uniqueScreensPlayedCount = $this->userProgress()
            ->where('user_id', $userId)
            ->distinct()
            ->count('screen_id');

        return $uniqueScreensPlayedCount >= $totalScreens;
    }

    public function getExerciseTotalStarsAttribute()
    {
        // Assuming you want to check if all screens in the exercise are completed by the user.
        $totalScreens = $this->screens->whereIn('content_type', ['letters', 'sentences'])->count();

        return $totalScreens * 3;
    }

    public function getIsHalfwayThroughExerciseAttribute()
    {
        $userId = auth()->id();

        if (!$userId) {
            return false;
        }

        // If screens and their user progress are already loaded, use them.
        if ($this->relationLoaded('screens') && $this->screens->every(function ($screen) {
            return $screen->relationLoaded('userProgress');
        })) {
            foreach ($this->screens as $screen) {
                if ($screen->userProgress->contains('user_id', $userId)) {
                    return true;
                }
            }

            return false;
        }

        // Fallback to the original query.
        return $this->userProgress()
            ->where('user_id', $userId)
            ->distinct()
            ->exists();
    }


    /*
    Get total stars earned per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */
    public function getTotalStarsEarnedAttribute()
    {
        $userId = auth()->id();

        if (!$userId) {
            return 0;
        }

        // If screens and their user progress are already loaded, compute in memory
        // to avoid a per-exercise aggregate query.
        if ($this->relationLoaded('screens') && $this->screens->every(function ($screen) {
            return $screen->relationLoaded('userProgress');
        })) {
            $total = 0;

            foreach ($this->screens as $screen) {
                $latestProgress = $screen->userProgress
                    ->where('user_id', $userId)
                    ->sortByDesc('completed_at')
                    ->first();

                if ($latestProgress) {
                    $total += $latestProgress->stars_earned;
                }
            }

            return $total;
        }

        // Fallback to the original aggregate query when relations are not preloaded.
        $uniqueScreensPlayed = UserProgress::where('user_id', $userId)
            ->where('exercise_id', $this->id)
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
        $userId = auth()->id();

        if (!$userId) {
            return null;
        }

        // If screens and their user progress are already loaded, compute in memory
        // to avoid additional queries per exercise.
        if ($this->relationLoaded('screens') && $this->screens->every(function ($screen) {
            return $screen->relationLoaded('userProgress');
        })) {
            $total = 0;
            $count = 0;

            foreach ($this->screens as $screen) {
                foreach ($screen->userProgress as $progress) {
                    if ($progress->user_id === $userId && $progress->typing_speed !== null) {
                        $total += $progress->typing_speed;
                        $count++;
                    }
                }
            }

            return $count > 0 ? $total / $count : null;
        }

        $userProgress = UserProgress::where('user_id', $userId)
            ->where('exercise_id', $this->id)
            ->select('typing_speed')
            ->get();

        return $userProgress->avg('typing_speed');
    }

    /*
    Get average accuracy earned per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */

    public function getAvgAccuracyAttribute()
    {
        $userId = auth()->id();

        if (!$userId) {
            return null;
        }

        // If screens and their user progress are already loaded, compute in memory
        // to avoid additional queries per exercise.
        if ($this->relationLoaded('screens') && $this->screens->every(function ($screen) {
            return $screen->relationLoaded('userProgress');
        })) {
            $total = 0;
            $count = 0;

            foreach ($this->screens as $screen) {
                foreach ($screen->userProgress as $progress) {
                    if ($progress->user_id === $userId && $progress->accuracy_percentage !== null) {
                        $total += $progress->accuracy_percentage;
                        $count++;
                    }
                }
            }

            return $count > 0 ? $total / $count : null;
        }

        $userProgress = UserProgress::where('user_id', $userId)
            ->where('exercise_id', $this->id)
            ->select('accuracy_percentage')
            ->get();

        return $userProgress->avg('accuracy_percentage');
    }


    /*
    Get summery of time per exercise,
    don't confuse it with the UserProgress service, it's doing calculations for "all" the progresses made by the user
    but this one is only per exercie for one exercise
    */
    public function getSumTimeAttribute()
    {
        $userId = auth()->id();

        $sumTime = 0;

        // If screens and their user progress are already loaded, compute in memory
        // to avoid additional queries per exercise.
        if ($userId && $this->relationLoaded('screens') && $this->screens->every(function ($screen) {
            return $screen->relationLoaded('userProgress');
        })) {
            foreach ($this->screens as $screen) {
                foreach ($screen->userProgress as $progress) {
                    if ($progress->user_id === $userId && $progress->time !== null) {
                        $sumTime += $progress->time;
                    }
                }
            }
        } elseif ($userId) {
            $userProgress = UserProgress::where('user_id', $userId)
                ->where('exercise_id', $this->id)
                ->select('time')
                ->get();

            $sumTime = (int) $userProgress->sum('time');
        }

        $carbonTime = CarbonInterval::seconds($sumTime)
            ->locale(App::getLocale() == 'ckb' ? 'ckb' : 'en')
            ->cascade()
            ->forHumans();

        return $carbonTime;
    }
}
