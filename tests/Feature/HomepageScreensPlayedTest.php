<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Models\StatsCounter;
use App\Models\User;
use App\Models\UserProgress;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class HomepageScreensPlayedTest extends TestCase
{
    use RefreshDatabase;

    public function test_homepage_uses_user_progress_count_before_counter_is_initialized(): void
    {
        Cache::flush();

        [$lesson, $exercise, $screen1, $screen2] = $this->createLessonExerciseAndScreens();

        $user = User::factory()->create();

        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen1->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 30,
            'accuracy_percentage' => 90,
            'stars_earned' => 2,
            'time' => 25,
        ]);

        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen2->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 35,
            'accuracy_percentage' => 92,
            'stars_earned' => 3,
            'time' => 30,
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);

        $stats = $response->viewData('page')['props']['stats'];

        $this->assertEquals(2, $stats['screensPlayed']);
        $this->assertDatabaseCount('stats_counters', 0);
    }

    public function test_guest_plays_are_included_in_homepage_screens_played(): void
    {
        Cache::flush();

        [$lesson, $exercise, $screen1, $screen2] = $this->createLessonExerciseAndScreens();

        $payload = [
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen1->id,
            'locale' => 'en',
            'typing_speed' => 40,
            'accuracy_percentage' => 90,
            'stars_earned' => 2,
            'time' => 30,
        ];

        $this->post('/saveprogress', $payload)->assertStatus(200);
        $this->post('/saveprogress', $payload)->assertStatus(200);

        // Guest plays should not create user_progress rows yet
        $this->assertDatabaseCount('user_progress', 0);

        // But they should be reflected in the global counter
        $this->assertDatabaseHas('stats_counters', [
            'key' => StatsCounter::SCREENS_PLAYED_KEY,
            'value' => 2,
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);

        $stats = $response->viewData('page')['props']['stats'];

        $this->assertEquals(2, $stats['screensPlayed']);
    }

    private function createLessonExerciseAndScreens(): array
    {
        $lesson = Lesson::create([
            'title' => 'Test Lesson',
            'locale' => 'en',
            'description' => 'Test description',
            'difficulty' => 'easy',
            'active' => true,
        ]);

        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Test Exercise',
            'locale' => 'en',
            'target_speed' => 40,
        ]);

        $screen1 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Test Screen 1',
            'url' => 'test-screen-1',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'test content',
            'extra' => '',
            'order' => 1,
        ]);

        $screen2 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Test Screen 2',
            'url' => 'test-screen-2',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'test content',
            'extra' => '',
            'order' => 2,
        ]);

        return [$lesson, $exercise, $screen1, $screen2];
    }
}

