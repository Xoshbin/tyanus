<?php

namespace App\Listeners;

use App\Models\UserProgress;
use Illuminate\Auth\Events\Authenticated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;

class TransferGuestData
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */

    public function handle(Authenticated $event): void
    {
        // Check if the user is authenticated (logged in).
        if (Auth::check()) {
            // Retrieve the user instance.
            $user = Auth::user();

            // Check if there's guest user data in the session.
            $guestUserId = session('guest_user_id');
            if ($guestUserId) {
                // Transfer and save progress data.
                $progressData = session('progress_' . $guestUserId);
                if ($progressData) {
                    // Iterate through progress data for each screen or level.
                    foreach ($progressData as $screenId => $screenProgress) {
                        foreach ($screenProgress as $progress) {
                            // Save progress data to the database.
                            // Example using Eloquent:
                            UserProgress::create(array_merge($progress, ['user_id' => $user->id, 'screen_id' => $screenId]));
                        }
                    }
                }

                //?not working for now, and it's not a big deal
                // Transfer and save settings data.
                // $settingsData = session('settings_' . $guestUserId);
                // if ($settingsData) {
                //     // Save settings data to the database.
                //     // Example using Eloquent:
                //     $user->addUniqueSetting($settingsData);
                // }
            }
        }
    }
}
