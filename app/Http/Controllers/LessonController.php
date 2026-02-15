<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessCertificate;
use App\Jobs\SaveBadge;
use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Services\UserProgressService;
use App\Services\UserSettingsService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LessonController extends Controller
{
    function index(): Response
    {
        $userSettings = new UserSettingsService;
        $userProgressService = new UserProgressService;
        $exerciseLanguage = $userSettings->getExerciseLang();
        $userId = auth()->id();

        // Optimize query to only load current user's progress
        $lessons = Lesson::where('locale', $exerciseLanguage)
            ->where('active', true)
            ->with([
                'exercises.screens' => function ($query) {
                    $query->whereIn('content_type', ['letters', 'sentences']);
                },
                'exercises.screens.userProgress' => function ($query) use ($userId) {
                    if ($userId) {
                        // In Laravel 11+, limit() in eager loading works per-parent using window functions.
                        // This efficiently loads only the latest progress record per screen.
                        $query->where('user_id', $userId)
                            ->latest('completed_at')
                            ->limit(1);
                    } else {
                        // If not authenticated, don't load any progress
                        $query->whereRaw('1 = 0');
                    }
                }
            ])
            ->get();

        $daily_time = $userSettings->getDailyTime();

        $todaySumTime = $userProgressService->getTodaySumTime();
        $sumTime = $userProgressService->getSumTime();
        $avgSpeed = $userProgressService->getAvgSpeed();
        $avgAccuracy = $userProgressService->getAvgAccuracy();

        return Inertia::render('Typing/Lessons', [
            'lessons' => $lessons,
            'daily_time' => $daily_time,
            'sumTime' => $sumTime,
            'avgSpeed' => $avgSpeed,
            'avgAccuracy' => $avgAccuracy,
            'todaySumTime' => $todaySumTime,
        ]);
    }

    public function challenge(Screen $screen): Response
    {
        $userId = auth()->id();

        // Eager load userProgress for the current screen to avoid N+1 queries
        $screen->load(['userProgress' => function ($query) use ($userId) {
            if ($userId) {
                $query->where('user_id', $userId);
            } else {
                $query->whereRaw('1 = 0');
            }
        }]);

        // Load next and previous screens with userProgress
        $nextScreen = Screen::where('id', $screen->id + 1)
            ->with(['userProgress' => function ($query) use ($userId) {
                if ($userId) {
                    $query->where('user_id', $userId);
                } else {
                    $query->whereRaw('1 = 0');
                }
            }])
            ->first();

        if ($screen->content_type == 'letters') {
            $prevScreen = Screen::where('id', $screen->id - 1)
                ->with(['userProgress' => function ($query) use ($userId) {
                    if ($userId) {
                        $query->where('user_id', $userId);
                    } else {
                        $query->whereRaw('1 = 0');
                    }
                }])
                ->first();
            $exerciseTotalStars = 3;
            return Inertia::render('Typing/ExercisePage', [
                'screen' => $screen,
                'exerciseTotalStars' => $exerciseTotalStars,
                'prevScreen' => $prevScreen,
                'nextScreen' => $nextScreen
            ]);
        } elseif ($screen->content_type == 'badge') {
            // Eager load exercise with screens and userProgress to avoid N+1 queries
            $exercise = Exercise::with([
                'screens' => function ($query) {
                    $query->whereIn('content_type', ['letters', 'sentences']);
                },
                'screens.userProgress' => function ($query) use ($userId) {
                    if ($userId) {
                        $query->where('user_id', $userId);
                    } else {
                        $query->whereRaw('1 = 0');
                    }
                }
            ])->find($screen->exercise_id);

            if (auth()->check()) {
                //save badge
                SaveBadge::dispatch($screen->title, $screen->locale);
            }

            return Inertia::render('Typing/BadgePage', [
                'exerciseName' => $screen->title,
                'starsEarned' => $exercise->totalStarsEarned,
                'exerciseTotalStars' => $exercise->exerciseTotalStars,
                'avgSpeed' => $exercise->avgSpeed,
                'avgAccuraccy' => $exercise->avgAccuracy,
                'sumTime' => $exercise->sumTime,
                'nextScreen' => $nextScreen
            ]);
        } else {
            // if we reached here it means the screen is "intro" or "sentences"
            // on the frontend we deal with it by showing different screens
            // then we need to show next screen instead of current screen
            // and for the next screen we plus it by 2
            // and for the prev screen we show current screen
            // it's very complicated just don't touch it 😊
            $nextScreenPlusTwo = $screen->content_type === "sentences"
                ? Screen::where('id', $screen->id + 1)
                    ->with(['userProgress' => function ($query) use ($userId) {
                        if ($userId) {
                            $query->where('user_id', $userId);
                        } else {
                            $query->whereRaw('1 = 0');
                        }
                    }])
                    ->first()
                : Screen::where('id', $screen->id + 2)
                    ->with(['userProgress' => function ($query) use ($userId) {
                        if ($userId) {
                            $query->where('user_id', $userId);
                        } else {
                            $query->whereRaw('1 = 0');
                        }
                    }])
                    ->first();

            $prevScreen = Screen::where('id', $screen->id - 1)
                ->with(['userProgress' => function ($query) use ($userId) {
                    if ($userId) {
                        $query->where('user_id', $userId);
                    } else {
                        $query->whereRaw('1 = 0');
                    }
                }])
                ->first();
            $exerciseTotalStars = 3;
            return Inertia::render('Typing/ExercisePage', [
                'screen' => $screen->content_type == "sentences" ? $screen : $nextScreen,
                'exerciseTotalStars' => $exerciseTotalStars,
                'prevScreen' => $screen,
                'nextScreen' => $nextScreenPlusTwo
            ]);
        }
    }

    public function test(): Response
    {
        $userId = auth()->id();

        // Eager load userProgress to avoid N+1 queries
        $testScreen = Screen::where('content_type', 'test')
            ->where('locale', app()->getLocale())
            ->with(['userProgress' => function ($query) use ($userId) {
                if ($userId) {
                    $query->where('user_id', $userId);
                } else {
                    $query->whereRaw('1 = 0');
                }
            }])
            ->inRandomOrder()
            ->first();

        return Inertia::render('Typing/ExercisePage', [
            'screen' => $testScreen,
        ]);
    }


    public function saveProgress(Request $request)
    {
        $request->validate([
            'lesson_id' => 'required',
            'exercise_id' => 'required',
            'screen_id' => 'required',
            'locale' => 'required',
            'typing_speed' => 'required',
            'accuracy_percentage' => 'required',
            'stars_earned' => 'required',
            'time' => 'required',
        ]);
        $userProgressService = new UserProgressService;

        $userProgressService->setProgress($request);

        // check if user reached last screen in the current exercise
        $screen = Screen::find($request->screen_id);

        if ($screen->content_type == 'letters' || $screen->content_type == 'sentences') {
            // Eager load exercises with screens to avoid N+1 queries
            $lesson = Lesson::with(['exercises.screens' => function ($query) {
                $query->whereIn('content_type', ['letters', 'sentences']);
            }])->find($request->lesson_id);

            $exercise = $lesson->exercises->last();

            $latestScreenId = $exercise->screens->filter(function ($screen) {
                return $screen->content_type === 'letters' || $screen->content_type === 'sentences';
            })->last()->id;

            // check if user reached last screen in the current exercise
            if ($latestScreenId === $request->screen_id) {
                // User has reached the last exercise of at least one level
                //run the job
                ProcessCertificate::dispatch($screen, $lesson);
            }
        }
    }
}
