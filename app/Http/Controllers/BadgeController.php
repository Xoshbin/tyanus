<?php

namespace App\Http\Controllers;

use App\Models\Badge;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BadgeController extends Controller
{
    function index(): Response
    {
        $badges = Badge::all();
        return Inertia::render('Typing/BadgesPage', [
            'badges' => $badges
        ]);
    }
}
