<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class UserSettingsService
{

    private $guestUserId;

    public function __construct()
    {
        $this->guestUserId = Session::get('guest_user_id');
    }
    /**
     * Get the user's exercise language setting.
     *
     * @return string
     */
    public function getExerciseLang(): string
    {
        if (Auth::check()) {
            return auth()->user()->settings['exercise_lang'] ?? 'ckb';
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['exercise_lang'] ?? 'ckb';
            } else {
                return 'ckb';
            }
        }
    }

    /**
     * Get the user's keyboard type setting.
     *
     * @return string
     */
    public function getKeyboardType(): string
    {
        if (Auth::check()) {
            return auth()->user()->settings['keyboard_type'] ?? 'windows';
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['keyboard_type'] ?? 'windows';
            } else {
                return 'windows';
            }
        }
    }

    /**
     * Check if the user wants to show the keyboard in the settings modal.
     *
     * @return bool
     */
    public function getShowKeyboard(): bool
    {
        if (Auth::check()) {
            return auth()->user()->settings['show_keyboard'] ?? true;
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['show_keyboard'] ?? true;
            } else {
                return true;
            }
        }
    }

    /**
     * Check if the user wants to show hands in the settings modal.
     *
     * @return bool
     */
    public function getShowHands(): bool
    {
        if (Auth::check()) {
            return auth()->user()->settings['show_hands'] ?? true;
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['show_hands'] ?? true;
            } else {
                return true;
            }
        }
    }

    /**
     * Check if the user wants to enable sound in the settings modal.
     *
     * @return bool
     */
    public function getEnableSound(): bool
    {
        if (Auth::check()) {
            return auth()->user()->settings['enable_sound'] ?? true;
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['enable_sound'] ?? true;
            } else {
                return true;
            }
        }
    }

    /**
     * Get the user's daily time setting.
     *
     * @return int
     */
    public function getDailyTime(): int
    {
        if (Auth::check()) {
            return auth()->user()->settings['daily_time'] ?? 15;
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['daily_time'] ?? 15;
            } else {
                return 15;
            }
        }
    }

    /**
     * Get the user's vertical tab position.
     *
     * @return int
     */
    public function getVerticalTabPositions(): int
    {
        if (Auth::check()) {
            return auth()->user()->settings['vertical_tab_position'] ?? 15;
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['vertical_tab_position'] ?? 15;
            } else {
                return 15;
            }
        }
    }

    /**
     * Get the user's horizontal tab position.
     *
     * @return int
     */
    public function getHoriziontalTabPositions(): int
    {
        if (Auth::check()) {
            return auth()->user()->settings['horizontal_tab_position'] ?? 15;
        } else {
            if ($this->guestUserId) {
                $settings = session('settings_' . $this->guestUserId, []);
                return $settings['horizontal_tab_position'] ?? 15;
            } else {
                return 15;
            }
        }
    }
}
