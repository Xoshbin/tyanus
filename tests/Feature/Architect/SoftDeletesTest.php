<?php

namespace Tests\Feature\Architect;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SoftDeletesTest extends TestCase
{
    use RefreshDatabase;

    public function test_lesson_can_be_soft_deleted()
    {
        $lesson = Lesson::create([
            'title' => 'Test Lesson',
            'locale' => 'en',
            'description' => 'Test',
            'difficulty' => 'beginner',
            'active' => true,
        ]);

        $this->assertDatabaseHas('lessons', ['id' => $lesson->id, 'deleted_at' => null]);

        $lesson->delete();

        // Check that the record still exists in the database
        $this->assertDatabaseHas('lessons', ['id' => $lesson->id]);

        // Check that deleted_at is set
        $this->assertNotNull($lesson->fresh()->deleted_at);

        // Helper assertion
        $this->assertSoftDeleted($lesson);
    }

    public function test_lesson_can_be_restored()
    {
        $lesson = Lesson::create([
            'title' => 'Test Lesson',
            'locale' => 'en',
            'description' => 'Test',
            'difficulty' => 'beginner',
            'active' => true,
        ]);
        $lesson->delete();

        $this->assertSoftDeleted($lesson);

        $lesson->restore();

        $this->assertDatabaseHas('lessons', ['id' => $lesson->id, 'deleted_at' => null]);
        $this->assertNotSoftDeleted($lesson);
    }

    public function test_exercise_can_be_soft_deleted()
    {
        $lesson = Lesson::create([
            'title' => 'Test Lesson',
            'locale' => 'en',
            'description' => 'Test',
            'difficulty' => 'beginner',
            'active' => true,
        ]);
        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Test Exercise',
            'locale' => 'en',
            'target_speed' => 20,
        ]);

        $exercise->delete();

        $this->assertSoftDeleted($exercise);
    }

    public function test_screen_can_be_soft_deleted()
    {
        $lesson = Lesson::create([
            'title' => 'Test Lesson',
            'locale' => 'en',
            'description' => 'Test',
            'difficulty' => 'beginner',
            'active' => true,
        ]);
        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Test Exercise',
            'locale' => 'en',
            'target_speed' => 20,
        ]);
        $screen = Screen::create([
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'title' => 'Test Screen',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'abc',
            'extra' => '{"some": "data"}',
            'order' => 1,
        ]);

        $screen->delete();

        $this->assertSoftDeleted($screen);
    }
}
