<?php

namespace App\Filament\Resources\ExerciseResource\Pages;

use App\Filament\Resources\ExerciseResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditExercise extends EditRecord
{
    protected static string $resource = ExerciseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
