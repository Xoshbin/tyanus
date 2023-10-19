<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class Screen extends Model
{
    use HasFactory;

    protected $fillable = ['exercise_id', 'content', 'target_speed', 'content_type', 'order'];

    // protected $with = ['userProgress'];

    public function exercise(): BelongsTo
    {
        return $this->belongsTo(Exercise::class);
    }

    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Lesson::class);
    }

    // Relationship with UserProgress model
    public function userProgress(): HasMany
    {
        return $this->hasMany(UserProgress::class);
    }

    public function getHasStarAttribute()
    {
        // Assuming you have a relationship called userProgress
        return $this->userProgress()
            ->where('user_id', auth()->id())
            ->first();
    }

    public function getStarsEarnedAttribute()
    {
        // Assuming you have a relationship called userProgress
        $userScreenProgress = $this->userProgress->where('user_id', auth()->id())->last();
        return $userScreenProgress ? $userScreenProgress->stars_earned : 0;
    }

    // used in lesson card
    // when deleted no errors given, so don't think it's not used
    public function getTypingSpeedAttribute()
    {
        // Assuming you have a relationship called userProgress
        $userScreenProgress = $this->userProgress->where('user_id', auth()->id())->last();
        return $userScreenProgress ? $userScreenProgress->typing_speed : 0;
    }

    // used in lesson card
    // when deleted no errors given, so don't think it's not used
    public function getAccuracyPercentageAttribute()
    {
        // Assuming you have a relationship called userProgress
        $userScreenProgress = $this->userProgress->where('user_id', auth()->id())->last();
        return $userScreenProgress ? $userScreenProgress->accuracy_percentage : 0;
    }

    // used in lesson card
    // when deleted no errors given, so don't think it's not used
    public function getTimeAttribute()
    {
        // Assuming you have a relationship called userProgress
        $userScreenProgress = $this->userProgress->where('user_id', auth()->id())->last();
        return $userScreenProgress ? $userScreenProgress->time : 0;
    }


    // used in test page
    // when deleted no errors given, so don't think it's not used
    public function getIsUserTestedAttribute()
    {
        // Check if there are any matching records, if user did any tests before
        $userTested = DB::table('user_progress')
            ->join('screens', 'user_progress.screen_id', '=', 'screens.id')
            ->where('user_progress.user_id', auth()->id())
            ->where('screens.content_type', 'test')
            ->exists();

        return $userTested;
    }
}
