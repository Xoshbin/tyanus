<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ScreenResource\Pages;
use App\Filament\Resources\ScreenResource\RelationManagers;
use App\Models\Screen;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ScreenResource extends Resource
{
    protected static ?string $model = Screen::class;

    protected static ?string $navigationIcon = 'heroicon-o-computer-desktop';

    protected static ?string $navigationLabel = 'سکرینەکان';

    protected static ?string $title = 'سکرینەکان';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title'),
                Forms\Components\TextInput::make('order')->numeric(),
                Forms\Components\Select::make('locale')
                    ->options([
                        'ckb' => 'Kurdish',
                        'en' => 'English',
                    ]),
                Forms\Components\Select::make('content_type')
                    ->options([
                        'letters' => 'Letters',
                        'words' => 'Words',
                        'sentences' => 'Sentences',
                        'video' => 'Video',
                        'game' => 'Game',
                        'badge' => 'Badge',
                        'intro' => 'Intro',
                    ]),
                Forms\Components\Fieldset::make('Parents')
                    ->schema([
                        Forms\Components\Select::make('lesson_id')
                            ->relationship('lesson', 'title')
                            ->searchable()
                            ->preload()
                            ->required(),
                        Forms\Components\Select::make('exercise_id')
                            ->relationship('exercise', 'title')
                            ->searchable()
                            ->preload()
                            ->required(),
                    ]),
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\RichEditor::make('content'),
                    ]),
                Forms\Components\Grid::make(1)
                    ->schema([
                        Forms\Components\RichEditor::make('extra'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('locale')->sortable(),
                Tables\Columns\TextColumn::make('lesson.title'),
                Tables\Columns\TextColumn::make('exercise.title'),
                Tables\Columns\TextColumn::make('content_type')->sortable(),
                Tables\Columns\TextColumn::make('order')->numeric()->sortable(),

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
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
            'index' => Pages\ListScreens::route('/'),
            'create' => Pages\CreateScreen::route('/create'),
            'edit' => Pages\EditScreen::route('/{record}/edit'),
        ];
    }
}
