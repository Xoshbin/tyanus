<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Models\Screen;
use App\Services\UserProgressService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;

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

        $totalScreens = Cache::rememberForever('totalExerciseScreens' . $screen->exercise_id, function () use ($screen) {
            $exercise = Exercise::find($screen->exercise_id);
            return $exercise->screens->where('content_type', 'letters')->count();
        });

        //? each screen have 3 stars that can be earned
        $exerciseTotalStars = $totalScreens * 3;

        return Inertia::render('Typing/Lesson', [
            'screen' => $screen,
            'exerciseTotalStars' => $exerciseTotalStars,
            'locale' => app()->getLocale(),
        ]);
    }


    public function saveProgress(Request $request)
    {
        $userProgressService = new UserProgressService;

        $userProgressService->setProgress($request);
    }
}
