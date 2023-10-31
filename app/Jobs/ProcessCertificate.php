<?php

namespace App\Jobs;

use App\Models\Certificate;
use App\Models\UserProgress;
use App\Services\CertificateGenerator;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessCertificate implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(private $screen, private $lesson)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //check if user already have a certifcate for the lesson
        // tp prevent duplicate certificates
        if (!auth()->user()->certificates()->where('lesson_id', $this->screen->lesson_id)->exists()) {
            $userProgress = UserProgress::where('user_id', auth()->id())->select('typing_speed', 'accuracy_percentage')->get();
            $completedAT = now();

            //generate certificate image
            $certificateGenerator = new CertificateGenerator;
            $imagePath = $certificateGenerator->generate($this->lesson, $completedAT, $userProgress);

            // Save user certificate
            $certificate = Certificate::create([
                'user_id' => auth()->id(),
                'lesson_id' => $this->screen->lesson_id,
                'difficulty' => $this->lesson->difficulty,
                'name' => auth()->user()->name,
                'locale' => $this->screen->locale,
                'typing_speed' => $userProgress->avg('typing_speed'),
                'accuracy_percentage' => $userProgress->avg('accuracy_percentage'),
                'completed_at' => $completedAT,
            ]);

            //attach certificate image to the certificate
            $certificate->addMedia($imagePath)->toMediaCollection('certificates');
        }
    }
}
