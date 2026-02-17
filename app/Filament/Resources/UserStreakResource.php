<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserStreakResource\Pages;
use App\Models\UserStreak;
use Filament\Forms;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserStreakResource extends Resource
{
    protected static ?string $model = UserStreak::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-fire';

    protected static string | \UnitEnum | null $navigationGroup = 'User Management';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\TextInput::make('current_streak')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('max_streak')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\DatePicker::make('last_activity_at'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->sortable(),
                Tables\Columns\TextColumn::make('current_streak')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_streak')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('last_activity_at')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListUserStreaks::route('/'),
            'create' => Pages\CreateUserStreak::route('/create'),
            'edit' => Pages\EditUserStreak::route('/{record}/edit'),
        ];
    }
}
