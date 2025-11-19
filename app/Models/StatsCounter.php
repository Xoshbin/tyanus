<?php

namespace App\Models;

use App\Models\UserProgress;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;

class StatsCounter extends Model
{
    use HasFactory;

    public const SCREENS_PLAYED_KEY = 'screens_played_total';

    protected $table = 'stats_counters';

    protected $primaryKey = 'key';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'key',
        'value',
    ];

    /**
     * Increment the "screens played" counter.
     */
    public static function incrementScreensPlayed(int $amount = 1): void
    {
        $key = self::SCREENS_PLAYED_KEY;

        $updated = static::query()
            ->where('key', $key)
            ->increment('value', $amount);

        if ($updated === 0) {
            // Initialize from existing user progress so we don't lose
            // historical logged-in plays when enabling this feature.
            $initialValue = UserProgress::count() + $amount;

            try {
                static::query()->create([
                    'key' => $key,
                    'value' => $initialValue,
                ]);
            } catch (QueryException $e) {
                // Another request likely created the row at the same time.
                // Just try incrementing one more time.
                static::query()
                    ->where('key', $key)
                    ->increment('value', $amount);
            }
        }
    }

    /**
     * Get the total "screens played" count.
     */
    public static function getScreensPlayed(): int
    {
        $record = static::query()->find(self::SCREENS_PLAYED_KEY);

        if (! $record) {
            // Fallback: before the counter is initialized, use the
            // existing UserProgress records for logged-in users.
            return UserProgress::count();
        }

        return (int) $record->value;
    }
}

