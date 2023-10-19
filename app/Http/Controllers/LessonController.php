<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LessonController extends Controller
{
    public function challenge(): Response
    {
        $macENtext = 'zxcvbnm,./\';lkjhgfdsaqwertyuiop[]\=-0987654321 ZXCVBNM<>?":LKJHGFDSAQWERTYUIOP{}|+_)(*&^%$#@!~';
        $macKUtext = 'زخجڤبنم،.\ع؛لکژهگفدساقوەرتیویۆپ][\\=-٠٩٨٧٦٥٤٣٢١` ضغچ><؟غ:ڵحذشئّێڕثووى}{|+_()ى&^%$#@!~';
        // $text = "fF jJ ↩";
        // $text = "jj ff gg kk ll";

        return Inertia::render('Typing/Lesson', [
            'typingText' => $macENtext
        ]);
    }
}
