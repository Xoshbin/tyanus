<?php

namespace Tests\Feature\Filament;

use App\Models\User;
use App\Filament\Resources\UserResource\Pages\ListUsers;
use App\Filament\Resources\UserResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class UserResourceTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_render_user_resource_page()
    {
        $user = User::factory()->create([
            'email' => 'admin@tyanus.com',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user)
            ->get(UserResource::getUrl('index'))
            ->assertSuccessful();
    }

    public function test_can_list_users()
    {
        $user = User::factory()->create([
            'email' => 'admin@tyanus.com',
            'email_verified_at' => now(),
        ]);

        Livewire::actingAs($user)
            ->test(ListUsers::class)
            ->assertSuccessful()
            ->assertCanSeeTableRecords([$user]);
    }
}
