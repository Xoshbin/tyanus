<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TransferGuestDataTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_progress_is_transferred_and_cleared_on_login(): void
    {
        $lesson = Lesson::create([
            'title' => 'Lesson 1',
            'locale' => 'en',
            'description' => 'Test lesson',
            'difficulty' => 'easy',
            'active' => true,
        ]);

        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Exercise 1',
            'locale' => 'en',
            'target_speed' => 40,
        ]);

        $screen = Screen::create([
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'title' => 'Screen 1',
            'url' => 'screen-1',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'test',
            'extra' => '',
            'order' => 1,
        ]);

        $guestUserId = 'guest-1';

        $progressData = [
            $screen->id => [
                [
                    'lesson_id' => $lesson->id,
                    'exercise_id' => $exercise->id,
                    'screen_id' => $screen->id,
                    'locale' => 'en',
                    'typing_speed' => 40,
                    'accuracy_percentage' => 90,
                    'stars_earned' => 1,
                    'time' => 30,
                    'error_characters' => '',
                    'created_at' => Carbon::create(2024, 1, 1, 12),
                ],
                [
                    'lesson_id' => $lesson->id,
                    'exercise_id' => $exercise->id,
                    'screen_id' => $screen->id,
                    'locale' => 'en',
                    'typing_speed' => 60,
                    'accuracy_percentage' => 80,
                    'stars_earned' => 2,
                    'time' => 50,
                    'error_characters' => '',
                    'created_at' => Carbon::create(2024, 1, 2, 12),
                ],
            ],
        ];

        $user = User::factory()->create();

        $response = $this->withSession([
            'guest_user_id' => $guestUserId,
            'progress_' . $guestUserId => $progressData,
        ])->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response->assertRedirect(RouteServiceProvider::HOME);
        $this->assertAuthenticatedAs($user);

        // Guest session data is cleared
        $this->assertFalse(session()->has('guest_user_id'));
        $this->assertFalse(session()->has('progress_' . $guestUserId));

        // Progress records were created for the user
        $this->assertEquals(2, UserProgress::count());

        $first = UserProgress::orderBy('created_at')->first();
        $second = UserProgress::orderBy('created_at', 'desc')->first();

        $this->assertEquals($user->id, $first->user_id);
        $this->assertEquals('2024-01-01', $first->created_at->toDateString());
        $this->assertEquals(30, $first->time);
        $this->assertEquals(40, $first->typing_speed);

        $this->assertEquals($user->id, $second->user_id);
        $this->assertEquals('2024-01-02', $second->created_at->toDateString());
        $this->assertEquals(50, $second->time);
        $this->assertEquals(60, $second->typing_speed);
    }

    public function test_guest_progress_is_transferred_and_cleared_on_registration(): void
    {
        $lesson = Lesson::create([
            'title' => 'Lesson 2',
            'locale' => 'en',
            'description' => 'Another test lesson',
            'difficulty' => 'easy',
            'active' => true,
        ]);

        $exercise = Exercise::create([
            'lesson_id' => $lesson->id,
            'title' => 'Exercise 2',
            'locale' => 'en',
            'target_speed' => 50,
        ]);

        $screen = Screen::create([
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'title' => 'Screen 2',
            'url' => 'screen-2',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'test 2',
            'extra' => '',
            'order' => 1,
        ]);

        $guestUserId = 'guest-2';

        $progressData = [
            $screen->id => [
                [
                    'lesson_id' => $lesson->id,
                    'exercise_id' => $exercise->id,
                    'screen_id' => $screen->id,
                    'locale' => 'en',
                    'typing_speed' => 55,
                    'accuracy_percentage' => 85,
                    'stars_earned' => 2,
                    'time' => 40,
                    'error_characters' => '',
                    'created_at' => Carbon::create(2024, 1, 3, 12),
                ],
            ],
        ];

        $response = $this->withSession([
            'guest_user_id' => $guestUserId,
            'progress_' . $guestUserId => $progressData,
        ])->post('/register', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertRedirect(RouteServiceProvider::HOME);

        $user = User::first();
        $this->assertAuthenticatedAs($user);

        $this->assertFalse(session()->has('guest_user_id'));
        $this->assertFalse(session()->has('progress_' . $guestUserId));

        $this->assertEquals(1, UserProgress::count());

        $progress = UserProgress::first();
        $this->assertEquals($user->id, $progress->user_id);
        $this->assertEquals(40, $progress->time);
        $this->assertEquals(55, $progress->typing_speed);
    }
}

