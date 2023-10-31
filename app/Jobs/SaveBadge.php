<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SaveBadge implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(private $title, private $exercise_language)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //save the badge
        if (!auth()->user()->badges()->where('name', $this->title)->exists()) {
            auth()->user()->badges()->create(['name' => $this->title, 'locale' => $this->exercise_language]);
        }
    }
}
