<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Models\Screen;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\App;
use App\Models\UserProgress;
use Illuminate\Support\Str;

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
        if (Auth::check()) {
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
        } else {
            // Check if a guest user ID already exists in the session
            $guestUserId = session('guest_user_id');

            if (!$guestUserId) {
                // Generate a unique identifier for the guest user
                $guestUserId = Str::uuid()->toString();

                // Store the guest user ID in the session
                session(['guest_user_id' => $guestUserId]);
            }

            // Retrieve the existing progress data for the guest user (if any)
            $progressData = session('progress_' . $guestUserId, []);

            // Extract the screen ID from the request
            $screenId = $request->input('screen_id');

            // Add the current progress data to the specific screen's array
            $progressData[$screenId][] = $request->all();

            // Store the updated progress data back in the session
            session(['progress_' . $guestUserId => $progressData]);
        }
    }
}
