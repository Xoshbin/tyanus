<?php

namespace App\Observers;

use App\Models\Screen;
use Illuminate\Support\Str;

class ScreenObserver
{
    /**
     * Handle the Screen "creating" event.
     */
    public function creating(Screen $screen)
    {
        $screen->url = Str::slug($screen->title);
    }

    /**
     * Handle the Screen "created" event.
     */
    public function created(Screen $screen): void
    {
        //
    }

    /**
     * Handle the Screen "updated" event.
     */
    public function updated(Screen $screen): void
    {
        //
    }

    /**
     * Handle the Screen "deleted" event.
     */
    public function deleted(Screen $screen): void
    {
        //
    }

    /**
     * Handle the Screen "restored" event.
     */
    public function restored(Screen $screen): void
    {
        //
    }

    /**
     * Handle the Screen "force deleted" event.
     */
    public function forceDeleted(Screen $screen): void
    {
        //
    }
}
