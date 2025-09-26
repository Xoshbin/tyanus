<?php

namespace App\Filament\Resources\ScreenResource\Pages;

use Filament\Actions\DeleteAction;
use App\Filament\Resources\ScreenResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditScreen extends EditRecord
{
    protected static string $resource = ScreenResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
