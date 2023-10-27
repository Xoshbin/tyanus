<?php

namespace App\Http\Controllers;

use App\Models\Screen;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\App;
use App\Models\UserProgress;


class LessonController extends Controller
{
    public function challenge($id): Response
    {
        // $macENtext = 'zxcvbnm,./\';lkjhgfdsaqwertyuiop[]\=-0987654321 ZXCVBNM<>?":LKJHGFDSAQWERTYUIOP{}|+_)(*&^%$#@!~';
        // $macKUtext = 'زخجڤبنم،.\ع؛لکژهگفدساقوەرتیویۆپ][\\=-٠٩٨٧٦٥٤٣٢١` ضغچ><؟غ:ڵحذشئّێڕثووى}{|+_()ى&^%$#@!~';
        // $spaceEnterENText = "fF jJ ↩";
        // $spaceEnterKUText = "ف ش ↩";
        // $text = "jj ff gg kk ll";
        $screen = Cache::rememberForever('screen' . $id, function () use ($id) {
            return Screen::where('id', $id)->first();
        });

        return Inertia::render('Typing/Lesson', [
            'screen' => $screen,
            'locale' => app()->getLocale(),
        ]);
    }

    public function saveProgress(Request $request)
    {
        $data = $request->validate([
            'lesson_id' => 'required',
            'exercise_id' => 'required',
            'screen_id' => 'required',
            'locale' => 'required',
            'typing_speed' => 'required',
            'accuracy_percentage' => 'required',
            'stars_earned' => 'required',
            'time' => 'required',
        ]);

        $data['user_id'] = auth()->user()->id;

        UserProgress::create($data);
    }
}
