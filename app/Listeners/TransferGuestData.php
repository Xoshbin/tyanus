<?php

namespace App\Listeners;

use App\Models\UserProgress;
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
    public function handle($event): void
    {
        // Only proceed if the user is now authenticated.
        if (! Auth::check()) {
            return;
        }

        $user = Auth::user();

        // Check if there's guest user data in the session.
        $guestUserId = session('guest_user_id');

        if (! $guestUserId) {
            return;
        }

        // Transfer and save progress data.
        $progressData = session('progress_' . $guestUserId);

        if ($progressData) {
            // Iterate through progress data for each screen or level.
            foreach ($progressData as $screenId => $screenProgress) {
                foreach ($screenProgress as $progress) {
                    UserProgress::create(array_merge($progress, [
                        'user_id' => $user->id,
                        'screen_id' => $screenId,
                    ]));
                }
            }
        }

        // Clear guest progress and settings from the session now that it has been persisted.
        session()->forget('progress_' . $guestUserId);
        session()->forget('settings_' . $guestUserId);
        session()->forget('guest_user_id');
    }
}
