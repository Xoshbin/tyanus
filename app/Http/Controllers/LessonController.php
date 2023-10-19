<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LessonController extends Controller
{
    public function challenge(): Response
    {
        // $text = 'qw↩ertyuiop[]\\\';lkjhgfdsazxcvbnm,./QWERTYUIOP{}|":LKJHGFDSAZXCVBNM<>?`1234567890-=~!@#$%^&*()_+↩';
        $text = '`١٢٣٤٥٦٧٨٩٠-=\[]پۆیویترەوقاسدفگهژکل؛ع\.،منبڤجخز~!@#$%^&ى)(_+|{}ىووثڕێّئشذحڵ:غ؟<>چغض↩';
        // $text = "fF jJ ↩";
        // $text = "jj ff gg kk ll";

        return Inertia::render('Typing/Lesson', [
            'typingText' => $text
        ]);
    }
}
