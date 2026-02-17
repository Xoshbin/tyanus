<?php

namespace App\Filament\Resources\UserStreakResource\Pages;

use App\Filament\Resources\UserStreakResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUserStreaks extends ListRecords
{
    protected static string $resource = UserStreakResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
