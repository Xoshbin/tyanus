<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExercisePageTest extends TestCase
{
    use RefreshDatabase;

    public function test_exercise_page_loads_with_optimized_queries(): void
    {
        // Create user
        $user = User::factory()->create([
            'settings' => ['exercise_lang' => 'en']
        ]);

        // Create lesson structure
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
            'content' => 'test content 1',
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
            'content' => 'test content 2',
            'extra' => '',
            'order' => 2,
        ]);

        // Create progress for user
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

        // Act as user and visit exercise page
        $this->actingAs($user);
        $response = $this->get('/lesson/' . $screen1->url);

        // Assert response is successful
        $response->assertStatus(200);

        // Get the screen data from the response
        $screen = $response->viewData('page')['props']['screen'];

        // Assert that user progress is loaded
        $this->assertNotEmpty($screen['user_progress']);
        $this->assertCount(1, $screen['user_progress']);
        $this->assertEquals($user->id, $screen['user_progress'][0]['user_id']);
    }

    public function test_badge_page_loads_with_optimized_queries(): void
    {
        // Create user
        $user = User::factory()->create([
            'settings' => ['exercise_lang' => 'en']
        ]);

        // Create lesson structure
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
            'title' => 'Test Screen',
            'url' => 'test-screen-letters',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'test content',
            'extra' => '',
            'order' => 1,
        ]);

        $badgeScreen = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Test Badge',
            'url' => 'test-badge',
            'locale' => 'en',
            'content_type' => 'badge',
            'content' => '',
            'extra' => '',
            'order' => 2,
        ]);

        // Create progress for user
        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen1->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 35,
            'accuracy_percentage' => 92,
            'stars_earned' => 3,
            'time' => 20,
        ]);

        // Act as user and visit badge page
        $this->actingAs($user);
        $response = $this->get('/lesson/' . $badgeScreen->url);

        // Assert response is successful
        $response->assertStatus(200);

        // Get the exercise data from the response
        $exerciseName = $response->viewData('page')['props']['exerciseName'];
        $starsEarned = $response->viewData('page')['props']['starsEarned'];

        // Assert that exercise data is loaded correctly
        $this->assertEquals('Test Badge', $exerciseName);
        $this->assertIsInt($starsEarned);
    }

    public function test_exercise_page_works_for_guest_users(): void
    {
        // Create lesson structure
        $lesson = Lesson::create([
            'title' => 'Test Lesson',
            'locale' => 'ckb',
            'description' => 'Test description',
            'difficulty' => 'easy',
            'active' => true,
        ]);

        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Test Exercise',
            'locale' => 'ckb',
            'target_speed' => 40,
        ]);

        $screen = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Test Screen',
            'url' => 'test-screen-guest',
            'locale' => 'ckb',
            'content_type' => 'letters',
            'content' => 'test content',
            'extra' => '',
            'order' => 1,
        ]);

        // Visit exercise page as guest
        $response = $this->get('/lesson/' . $screen->url);

        // Assert response is successful
        $response->assertStatus(200);

        // Get the screen data from the response
        $screenData = $response->viewData('page')['props']['screen'];

        // Assert that no progress is loaded for guest
        $this->assertEmpty($screenData['user_progress']);
    }
}
