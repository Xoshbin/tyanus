<?php

namespace App\Services;

class UserSettings
{
    /**
     * Get the user's exercise language setting.
     *
     * @return string
     */
    public function getExerciseLang(): string
    {
        return auth()->user()->settings['exercise_lang'] ?? 'ckb';
    }

    /**
     * Get the user's keyboard type setting.
     *
     * @return string
     */
    public function getKeyboardType(): string
    {
        return auth()->user()->settings['keyboard_type'] ?? 'windows';
    }

    /**
     * Check if the user wants to show the keyboard in the settings modal.
     *
     * @return bool
     */
    public function getShowKeyboard(): bool
    {
        return auth()->user()->settings['show_keyboard'] ?? true;
    }

    /**
     * Check if the user wants to show hands in the settings modal.
     *
     * @return bool
     */
    public function getShowHands(): bool
    {
        return auth()->user()->settings['show_hands'] ?? true;
    }

    /**
     * Check if the user wants to enable sound in the settings modal.
     *
     * @return bool
     */
    public function getEnableSound(): bool
    {
        return auth()->user()->settings['enable_sound'] ?? true;
    }

    /**
     * Get the user's daily time setting.
     *
     * @return int
     */
    public function getDailyTime(): int
    {
        return auth()->user()->settings['daily_time'] ?? 15;
    }
}
