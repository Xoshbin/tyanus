<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserStreak;
use Carbon\Carbon;

class StreakService
{
    /**
     * Update the user's streak based on their activity.
     *
     * @param User $user
     * @return void
     */
    public function updateStreak(User $user): void
    {
        $today = Carbon::today();

        // Ensure streak record exists
        /** @var UserStreak $streak */
        $streak = $user->streak()->firstOrNew([], [
            'current_streak' => 0,
            'max_streak' => 0,
            'last_activity_at' => null,
        ]);

        $lastActivity = $streak->last_activity_at;

        // If activity is already logged for today, do nothing.
        if ($lastActivity && $lastActivity->isSameDay($today)) {
            return;
        }

        // Check if the last activity was yesterday
        if ($lastActivity && $lastActivity->isYesterday()) {
            $streak->current_streak++;
        } else {
            // Streak broken or first time
            $streak->current_streak = 1;
        }

        // Update max streak if needed
        if ($streak->current_streak > $streak->max_streak) {
            $streak->max_streak = $streak->current_streak;
        }

        $streak->last_activity_at = $today;
        $streak->save();
    }
}
