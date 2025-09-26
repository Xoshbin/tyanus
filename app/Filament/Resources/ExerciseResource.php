<?php

namespace App\Filament\Resources;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\TextInputColumn;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\CreateAction;
use App\Filament\Resources\ExerciseResource\Pages\ListExercises;
use App\Filament\Resources\ExerciseResource\Pages\CreateExercise;
use App\Filament\Resources\ExerciseResource\Pages\EditExercise;
use App\Filament\Resources\ExerciseResource\Pages;
use App\Filament\Resources\ExerciseResource\RelationManagers;
use App\Models\Exercise;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ExerciseResource extends Resource
{
    protected static ?string $model = Exercise::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-square-3-stack-3d';

    protected static ?string $navigationLabel = 'ڕاهێنانەکان';

    protected static ?string $title = 'ڕاهێنانەکان';

    protected static ?int $navigationSort = 2;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title'),
                TextInput::make('target_speed')->numeric(),
                Select::make('lesson_id')
                    ->relationship('lesson', 'title')
                    ->searchable()
                    ->preload()
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->searchable()->sortable(),
                TextInputColumn::make('target_speed')->sortable(),
                TextColumn::make('lesson.title'),
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
            ])
            ->emptyStateActions([
                CreateAction::make(),
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
            'index' => ListExercises::route('/'),
            'create' => CreateExercise::route('/create'),
            'edit' => EditExercise::route('/{record}/edit'),
        ];
    }
}
