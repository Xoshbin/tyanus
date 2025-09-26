<?php

namespace App\Http\Controllers;

use App\Services\HomepageService;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route as RouteFacade;

class HomeController extends Controller
{
    public function index(HomepageService $homepageService): Response
    {
        return Inertia::render('Welcome', [
            'locale' => app()->getLocale(),
            'canLogin' => RouteFacade::has('login'),
            'canRegister' => RouteFacade::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'stats' => $homepageService->getPublicStats(),
        ]);
    }
}

