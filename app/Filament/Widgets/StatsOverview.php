<?php

namespace App\Filament\Widgets;

use App\Models\Exercise;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?string $pollingInterval = null;
    protected function getStats(): array
    {
        $users = User::count();
        $screens = Screen::count();
        $exercises = Exercise::count();
        $userProgress = UserProgress::count();
        return [
            Stat::make('Users', $users),
            Stat::make('Screens', $screens),
            Stat::make('Exercises', $exercises),
            Stat::make('Screens played', $userProgress)->color('success')->description('3% increase')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
        ];
    }
}
