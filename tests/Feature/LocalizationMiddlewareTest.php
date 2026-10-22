<?php

namespace Tests\Feature;

use App\Http\Middleware\Localization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Tests\TestCase;

class LocalizationMiddlewareTest extends TestCase
{
    public function test_uses_config_locale_when_session_has_no_locale(): void
    {
        Config::set('app.locale', 'en');

        $request = Request::create('/', 'GET');
        $middleware = new Localization();

        $session = app('session.store');
        $request->setLaravelSession($session);

        $middleware->handle($request, function ($req) {
            return response('OK');
        });

        $this->assertEquals('en', App::getLocale());
        $this->assertEquals('en', session('locale'));
    }

    public function test_respects_session_locale_if_already_set(): void
    {
        Config::set('app.locale', 'en');

        $request = Request::create('/', 'GET');
        $session = app('session.store');
        $session->put('locale', 'ckb');
        $request->setLaravelSession($session);

        $middleware = new Localization();
        $middleware->handle($request, function ($req) {
            return response('OK');
        });

        $this->assertEquals('ckb', App::getLocale());
        $this->assertEquals('ckb', session('locale'));
    }
}
