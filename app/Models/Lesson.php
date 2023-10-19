<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'locale', 'description', 'difficulty', 'active'];

    protected $casts = ['active' => 'boolean'];


    public function exercises(): HasMany
    {
        return $this->hasMany(Exercise::class);
    }

    public function timed_tests()
    {
        return $this->exercises()->where('title', 'Timed Tests');
    }
}
