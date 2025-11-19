<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LessonsPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_lessons_page_only_loads_current_user_progress(): void
    {
        // Create two users with exercise_lang set to 'en'
        $user1 = User::factory()->create([
            'settings' => ['exercise_lang' => 'en']
        ]);
        $user2 = User::factory()->create([
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

        $screen = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Test Screen',
            'url' => 'test-screen',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'test content',
            'extra' => '',
            'order' => 1,
        ]);

        // Create progress for both users
        UserProgress::create([
            'user_id' => $user1->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 30,
            'accuracy_percentage' => 90,
            'stars_earned' => 2,
            'time' => 25,
        ]);

        UserProgress::create([
            'user_id' => $user2->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 40,
            'accuracy_percentage' => 95,
            'stars_earned' => 3,
            'time' => 30,
        ]);

        // Act as user1 and visit lessons page
        $this->actingAs($user1);
        $response = $this->get('/lessons');

        // Assert response is successful
        $response->assertStatus(200);

        // Get the lessons data from the response
        $lessons = $response->viewData('page')['props']['lessons'];

        // Assert that only user1's progress is loaded
        $loadedExercise = $lessons[0]['exercises'][0];
        $loadedScreen = $loadedExercise['screens'][0];

        // The screen should have user progress loaded
        $this->assertNotEmpty($loadedScreen['user_progress']);

        // Should only have 1 progress record (for user1)
        $this->assertCount(1, $loadedScreen['user_progress']);

        // The progress should belong to user1
        $this->assertEquals($user1->id, $loadedScreen['user_progress'][0]['user_id']);
        $this->assertEquals(30, $loadedScreen['user_progress'][0]['typing_speed']);

        // Should NOT contain user2's progress
        $this->assertNotEquals($user2->id, $loadedScreen['user_progress'][0]['user_id']);
    }

    public function test_lessons_page_works_for_guest_users(): void
    {
        // Create lesson structure with 'ckb' locale (default for guests)
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

        // Visit lessons page as guest
        $response = $this->get('/lessons');

        // Assert response is successful
        $response->assertStatus(200);

        // Get the lessons data from the response
        $lessons = $response->viewData('page')['props']['lessons'];

        // Assert that no progress is loaded for guest
        $loadedExercise = $lessons[0]['exercises'][0];
        $loadedScreen = $loadedExercise['screens'][0];

        // The screen should have empty user progress
        $this->assertEmpty($loadedScreen['user_progress']);
    }
}

