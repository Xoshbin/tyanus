<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LessonController extends Controller
{
    public function challenge(): Response
    {
        $text = 'This is some';

        return Inertia::render('Lesson', [
            'typingText' => $text
        ]);
    }
}
