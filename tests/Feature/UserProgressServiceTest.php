<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Lesson;
use App\Models\Screen;
use App\Models\User;
use App\Models\UserProgress;
use App\Services\UserProgressService;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class UserProgressServiceTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_aggregates_stats_for_authenticated_user(): void
    {
        Carbon::setTestNow(Carbon::create(2024, 1, 1, 12));

        $user = User::factory()->create([
            'settings' => ['exercise_lang' => 'en'],
        ]);

        $this->actingAs($user);

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
            'target_speed' => 50,
        ]);
        $exercise->locale = 'en';
        $exercise->save();

        $screen1 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Screen 1',
            'url' => 'test-screen-1',
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
            'url' => 'test-screen-2',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'content',
            'extra' => '',
            'order' => 2,
        ]);

        $screen3 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Screen 3',
            'url' => 'test-screen-3',
            'locale' => 'en',
            'content_type' => 'letters',
            'content' => 'content',
            'extra' => '',
            'order' => 3,
        ]);

        $screen4 = Screen::create([
            'exercise_id' => $exercise->id,
            'lesson_id' => $lesson->id,
            'title' => 'Screen 4',
            'url' => 'test-screen-4',
            'locale' => 'ckb',
            'content_type' => 'letters',
            'content' => 'content',
            'extra' => '',
            'order' => 4,
        ]);

        // Today entries in the selected locale
        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen1->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 40,
            'accuracy_percentage' => 90,
            'stars_earned' => 1,
            'time' => 30,
        ]);

        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen2->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 50,
            'accuracy_percentage' => 95,
            'stars_earned' => 2,
            'time' => 70,
        ]);

        // Older entry in the same locale (should be counted in totals/averages but not today)
        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen3->id,
            'locale' => 'en',
            'error_characters' => '',
            'typing_speed' => 60,
            'accuracy_percentage' => 85,
            'stars_earned' => 3,
            'time' => 50,
        ]);

        DB::table('user_progress')
            ->where('user_id', $user->id)
            ->where('lesson_id', $lesson->id)
            ->where('exercise_id', $exercise->id)
            ->where('screen_id', $screen3->id)
            ->update(['created_at' => Carbon::now()->subDay()]);

        // Different locale (should be ignored)
        UserProgress::create([
            'user_id' => $user->id,
            'lesson_id' => $lesson->id,
            'exercise_id' => $exercise->id,
            'screen_id' => $screen4->id,
            'locale' => 'ckb',
            'error_characters' => '',
            'typing_speed' => 100,
            'accuracy_percentage' => 100,
            'stars_earned' => 3,
            'time' => 999,
        ]);

        $service = new UserProgressService();

        $this->assertSame('01:40', $service->getTodaySumTime()); // 30 + 70 seconds
        $this->assertEquals(150, $service->getSumTime()); // 30 + 70 + 50
        $this->assertEquals(50, $service->getAvgSpeed()); // (40 + 50 + 60) / 3
        $this->assertEquals(90, $service->getAvgAccuracy()); // (90 + 95 + 85) / 3
    }

    public function test_it_aggregates_stats_for_guest_user_from_session(): void
    {
        Carbon::setTestNow(Carbon::create(2024, 1, 1, 12));

        session(['guest_user_id' => 'guest-1']);
        session(['settings_guest-1' => ['exercise_lang' => 'en']]);

        $serviceForWrite = new UserProgressService();

        // Today progress
        $todayRequest = Request::create('/saveprogress', 'POST', [
            'lesson_id' => 1,
            'exercise_id' => 1,
            'screen_id' => 1,
            'locale' => 'en',
            'typing_speed' => 40,
            'accuracy_percentage' => 90,
            'stars_earned' => 1,
            'time' => 30,
        ]);
        $serviceForWrite->setProgress($todayRequest);

        // Yesterday progress
        Carbon::setTestNow(Carbon::create(2023, 12, 31, 12));

        $yesterdayRequest = Request::create('/saveprogress', 'POST', [
            'lesson_id' => 1,
            'exercise_id' => 1,
            'screen_id' => 2,
            'locale' => 'en',
            'typing_speed' => 60,
            'accuracy_percentage' => 80,
            'stars_earned' => 2,
            'time' => 50,
        ]);
        $serviceForWrite->setProgress($yesterdayRequest);

        // Switch "today" back
        Carbon::setTestNow(Carbon::create(2024, 1, 1, 12));

        $service = new UserProgressService();

        $this->assertSame('00:30', $service->getTodaySumTime());
        $this->assertEquals(80, $service->getSumTime());
        $this->assertEquals(50, $service->getAvgSpeed());
        $this->assertEquals(85, $service->getAvgAccuracy());
    }
}

