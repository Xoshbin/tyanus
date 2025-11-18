<?php

namespace App\Providers;

use App\Listeners\TransferGuestData;
use App\Models\Screen;
use App\Observers\ScreenObserver;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{

    /**
     * The model observers for your application.
     *
     * @var array
     */
    // protected $observers = [
    //     Screen::class => [ScreenObserver::class],
    // ];

    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        Login::class => [
            TransferGuestData::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        Screen::observe(ScreenObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
