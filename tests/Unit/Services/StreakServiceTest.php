<?php

namespace Tests\Unit\Services;

use App\Models\User;
use App\Models\UserStreak;
use App\Services\StreakService;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StreakServiceTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_new_streak()
    {
        $user = User::factory()->create();
        $service = new StreakService();

        $service->updateStreak($user);

        $this->assertDatabaseHas('user_streaks', [
            'user_id' => $user->id,
            'current_streak' => 1,
            'max_streak' => 1,
            'last_activity_at' => Carbon::today(),
        ]);
    }

    public function test_it_increments_streak_if_activity_was_yesterday()
    {
        $user = User::factory()->create();

        UserStreak::create([
            'user_id' => $user->id,
            'current_streak' => 5,
            'max_streak' => 5,
            'last_activity_at' => Carbon::yesterday(),
        ]);

        $service = new StreakService();
        $service->updateStreak($user);

        $this->assertDatabaseHas('user_streaks', [
            'user_id' => $user->id,
            'current_streak' => 6,
            'max_streak' => 6,
            'last_activity_at' => Carbon::today(),
        ]);
    }

    public function test_it_does_not_increment_if_activity_was_today()
    {
        $user = User::factory()->create();

        UserStreak::create([
            'user_id' => $user->id,
            'current_streak' => 5,
            'max_streak' => 5,
            'last_activity_at' => Carbon::today(),
        ]);

        $service = new StreakService();
        $service->updateStreak($user);

        $this->assertDatabaseHas('user_streaks', [
            'user_id' => $user->id,
            'current_streak' => 5, // unchanged
            'max_streak' => 5,
            'last_activity_at' => Carbon::today(),
        ]);
    }

    public function test_it_resets_streak_if_activity_was_older_than_yesterday()
    {
        $user = User::factory()->create();

        UserStreak::create([
            'user_id' => $user->id,
            'current_streak' => 10,
            'max_streak' => 10,
            'last_activity_at' => Carbon::now()->subDays(2),
        ]);

        $service = new StreakService();
        $service->updateStreak($user);

        $this->assertDatabaseHas('user_streaks', [
            'user_id' => $user->id,
            'current_streak' => 1, // reset
            'max_streak' => 10, // kept max
            'last_activity_at' => Carbon::today(),
        ]);
    }

    public function test_it_updates_max_streak()
    {
        $user = User::factory()->create();
        // Suppose max streak was 2, current is 2. Last activity yesterday.
        UserStreak::create([
            'user_id' => $user->id,
            'current_streak' => 2,
            'max_streak' => 2,
            'last_activity_at' => Carbon::yesterday(),
        ]);

        $service = new StreakService();
        $service->updateStreak($user);

        $this->assertDatabaseHas('user_streaks', [
            'user_id' => $user->id,
            'current_streak' => 3,
            'max_streak' => 3, // updated
            'last_activity_at' => Carbon::today(),
        ]);
    }
}
