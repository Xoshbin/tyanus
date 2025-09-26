<?php

namespace App\Services;

use App\Models\Exercise;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use Carbon\Carbon;

class HomepageService
{
    /**
     * Return public-facing aggregate statistics for the homepage.
     */
    public function getPublicStats(): array
    {
        $users = User::count();
        $screens = Screen::count();
        $exercises = Exercise::count();
        $screensPlayed = UserProgress::count();

        // Trend: last 30 days vs previous 30 days
        $now = Carbon::now();
        $currentWindow = UserProgress::where('completed_at', '>=', $now->copy()->subDays(30))->count();
        $previousWindow = UserProgress::whereBetween('completed_at', [$now->copy()->subDays(60), $now->copy()->subDays(30)])->count();
        $screensPlayedChange = $previousWindow > 0
            ? (int) round((($currentWindow - $previousWindow) / max(1, $previousWindow)) * 100)
            : null;

        return [
            'users' => $users,
            'screens' => $screens,
            'exercises' => $exercises,
            'screensPlayed' => $screensPlayed,
            'screensPlayedChange' => $screensPlayedChange,
        ];
    }
}

