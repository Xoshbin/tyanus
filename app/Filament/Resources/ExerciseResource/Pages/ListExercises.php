<?php

namespace App\Filament\Resources\ExerciseResource\Pages;

use Filament\Actions\CreateAction;
use App\Filament\Resources\ExerciseResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListExercises extends ListRecords
{
    protected static string $resource = ExerciseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
