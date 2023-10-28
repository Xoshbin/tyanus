<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    function userSettings(Request $request)
    {
        // Get the setting to update and its new value from the request.
        $settingToUpdate = $request->get('setting'); // 'enable_sound', 'exercise_lang', etc.
        $newValue = $request->get('value');

        // Validate the settingToUpdate if necessary.

        if (Auth::check()) {
            // If the user is logged in, update their settings directly.
            $user = auth()->user();
            $user->addUniqueSetting($settingToUpdate, $newValue);
            $user->save();
        } else {
            // If the user is not logged in, store the settings in the session.
            $guestUserId = session('guest_user_id');
            if (!$guestUserId) {
                // Generate a unique identifier for the guest user
                $guestUserId = Str::uuid()->toString();
                session(['guest_user_id' => $guestUserId]);
            }

            // Store the user's settings in the session along with the guest user identifier.
            $settings = session('settings_' . $guestUserId, []);
            $settings[$settingToUpdate] = $newValue;
            session(['settings_' . $guestUserId => $settings]);
        }
    }
}
