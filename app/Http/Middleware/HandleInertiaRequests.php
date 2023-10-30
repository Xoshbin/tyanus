<?php

namespace App\Http\Middleware;

use App\Services\UserSettingsService;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $userSettings = new UserSettingsService;
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'language' => fn () => translations(base_path('lang/' . app()->getLocale() . '.json')),
            'user_settings' => [
                'exercise_lang' => $userSettings->getExerciseLang(),
                'enable_sound' => $userSettings->getEnableSound(),
                'keyboard_type' => $userSettings->getKeyboardType(),
                'show_keyboard' => $userSettings->getShowKeyboard(),
                'show_hands' => $userSettings->getShowHands(),
                'daily_time' => $userSettings->getDailyTime(),
            ]
        ];
    }
}
