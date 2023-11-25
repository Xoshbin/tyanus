<?php

namespace App\Http\Controllers;

use App\Models\UserProgress;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $stats = UserProgress::where('user_id', auth()->user()->id)->get();
        return Inertia::render('Typing/StatsPage', [
            'stats' => $stats
        ]);
    }
}
