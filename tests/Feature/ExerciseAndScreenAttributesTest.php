<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExerciseAndScreenAttributesTest extends TestCase
{
    use RefreshDatabase;

    public function test_exercise_flags_and_screen_attributes_use_preloaded_relations(): void
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $lesson = Lesson::create([
            'title' => 'Lesson',
            'locale' => 'en',
            'description' => 'Description',
            'difficulty' => 'easy',
            'active' => true,
        ]);

        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Exercise',
            'target_speed' => 40,
        ]);

        $screen1 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Screen 1',
            'url' => 'screen-1',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'content',
            'extra' => '',
            'order' => 1,
        ]);

        $screen2 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Screen 2',
            'url' => 'screen-2',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'content',
            'extra' => '',
            'order' => 2,
        ]);

        // No progress yet
        $lesson = Lesson::with('exercises.screens.userProgress')->find($lesson->id);
        $exercise = $lesson->exercises->first();

        $this->assertFalse($exercise->isExerciseFinished);
        $this->assertFalse($exercise->isHalfwayThroughExercise);

        // Progress on first screen only
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

        $lesson = Lesson::with('exercises.screens.userProgress')->find($lesson->id);
        $exercise = $lesson->exercises->first();
        $screen1 = $exercise->screens->firstWhere('id', $screen1->id);
        $screen2 = $exercise->screens->firstWhere('id', $screen2->id);

        $this->assertTrue($exercise->isHalfwayThroughExercise);
        $this->assertFalse($exercise->isExerciseFinished);

        $this->assertTrue($screen1->hasStar);
        $this->assertSame(2, $screen1->starsEarned);
        $this->assertSame(30, $screen1->typingSpeed);
        $this->assertEquals(90, $screen1->accuracyPercentage);
        $this->assertEquals(25, $screen1->time);

        $this->assertFalse($screen2->hasStar);
        $this->assertSame(0, $screen2->starsEarned);

        // Progress on second screen as well
        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen2->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 40,
            'accuracy_percentage' => 95,
            'stars_earned' => 3,
            'time' => 35,
        ]);

        $lesson = Lesson::with('exercises.screens.userProgress')->find($lesson->id);
        $exercise = $lesson->exercises->first();

        $this->assertTrue($exercise->isHalfwayThroughExercise);
        $this->assertTrue($exercise->isExerciseFinished);
        $this->assertSame(5, $exercise->totalStarsEarned);
        $this->assertSame(6, $exercise->exerciseTotalStars);
    }
}

