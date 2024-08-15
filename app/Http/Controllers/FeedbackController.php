<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        Feedback::create($request->validate([
            'name' => ['required', 'max:50', 'min:3'],
            'email' => ['required', 'max:50', 'email'],
            'message' => ['required', 'min:10'],
        ]));

        return Redirect::back();
    }
}
