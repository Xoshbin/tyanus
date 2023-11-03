<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserProgress extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'lesson_id', 'exercise_id', 'screen_id', 'locale', 'error_characters', 'typing_speed', 'accuracy_percentage', 'completed_at', 'stars_earned', 'time'];

    protected $dates = ['completed_at'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->completed_at = now();
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Lesson::class);
    }

    public function exercise(): BelongsTo
    {
        return $this->belongsTo(Exercise::class);
    }
}
