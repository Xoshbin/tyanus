<?php

namespace App\Filament\Resources;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\CheckboxColumn;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Resources\FeedbackResource\Pages\ListFeedback;
use App\Filament\Resources\FeedbackResource\Pages\CreateFeedback;
use App\Filament\Resources\FeedbackResource\Pages\EditFeedback;
use App\Filament\Resources\FeedbackResource\Pages;
use App\Filament\Resources\FeedbackResource\RelationManagers;
use App\Models\Feedback;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class FeedbackResource extends Resource
{
    protected static ?string $model = Feedback::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('message')->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('message')->wrap()->limit(25)->searchable() // Allows the values in this column to be searched.
                ->label('فیدباک'),
                CheckboxColumn::make('is_read')
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListFeedback::route('/'),
            'create' => CreateFeedback::route('/create'),
            'edit' => EditFeedback::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return Feedback::where('is_read', false)->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'warning';
    }
}
