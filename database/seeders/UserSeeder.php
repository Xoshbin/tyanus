<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Khoshbin',
                'email' => 'xoshbin@tyanus.com',
                'email_verified_at' => now(),
                'password' => '$2y$10$67RtM6nAM5/.gvEgc4p0gePYajsmcV5sRXMYTjPDDTfG0AJFyTPgG', // password
                'remember_token' => Str::random(10),
            ]
        ];

        User::insert($users);
    }
}
