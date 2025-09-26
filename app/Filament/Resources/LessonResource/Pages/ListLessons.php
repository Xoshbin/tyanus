<?php

namespace App\Filament\Resources\LessonResource\Pages;

use Filament\Actions\CreateAction;
use App\Filament\Resources\LessonResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLessons extends ListRecords
{
    protected static string $resource = LessonResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
