<?php

namespace App\Filament\Resources;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Components\Grid;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\CreateAction;
use App\Filament\Resources\ScreenResource\Pages\ListScreens;
use App\Filament\Resources\ScreenResource\Pages\CreateScreen;
use App\Filament\Resources\ScreenResource\Pages\EditScreen;
use App\Filament\Resources\ScreenResource\Pages;
use App\Filament\Resources\ScreenResource\RelationManagers;
use App\Models\Screen;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ScreenResource extends Resource
{
    protected static ?string $model = Screen::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-computer-desktop';

    protected static ?string $navigationLabel = 'سکرینەکان';

    protected static ?string $title = 'سکرینەکان';

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title'),
                TextInput::make('order')->numeric(),
                Select::make('locale')
                    ->options([
                        'ckb' => 'Kurdish',
                        'en' => 'English',
                    ]),
                Select::make('content_type')
                    ->options([
                        'letters' => 'Letters',
                        'words' => 'Words',
                        'sentences' => 'Sentences',
                        'video' => 'Video',
                        'game' => 'Game',
                        'badge' => 'Badge',
                        'intro' => 'Intro',
                    ]),
                Fieldset::make('Parents')
                    ->schema([
                        Select::make('lesson_id')
                            ->relationship('lesson', 'title')
                            ->searchable()
                            ->preload()
                            ->required(),
                        Select::make('exercise_id')
                            ->relationship('exercise', 'title')
                            ->searchable()
                            ->preload()
                            ->required(),
                    ]),
                Grid::make(1)
                    ->schema([
                        TextInput::make('content'),
                    ]),
                Grid::make(1)
                    ->schema([
                        RichEditor::make('extra'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->searchable()->sortable(),
                TextColumn::make('locale')->sortable(),
                TextColumn::make('lesson.title'),
                TextColumn::make('exercise.title'),
                TextColumn::make('content_type')->sortable(),
                TextColumn::make('order')->numeric()->sortable(),

            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->recordActions([
                EditAction::make(),
                Tables\Actions\RestoreAction::make(),
                Tables\Actions\ForceDeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                CreateAction::make(),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
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
            'index' => ListScreens::route('/'),
            'create' => CreateScreen::route('/create'),
            'edit' => EditScreen::route('/{record}/edit'),
        ];
    }
}
