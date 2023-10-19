<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lessons = [
            ['title' => 'سەرەتایی', 'description' => 'سەرەتایی', 'difficulty' => 'beginner', 'active' => true, 'locale' => 'ckb'],
            ['title' => 'ناوەندی', 'description' => 'ناوەندی', 'difficulty' => 'intermediate', 'active' => true, 'locale' => 'ckb'],
            ['title' => 'پێشکەوتوو', 'description' => 'پێشکەوتوو', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'ckb'],
            ['title' => 'ئامادەکاری بۆ تێک', 'description' => 'ئامادەکاری بۆ تێک', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'ckb'],
            ['title' => 'ئامادەکاری بۆ کار', 'description' => 'ئامادەکاری بۆ کار', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'ckb'],
            ['title' => 'ئامادەکاری بۆ کۆد نوسین', 'description' => 'سەرەتایی', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'ckb'],
            ['title' => 'بەهێزکردن', 'description' => 'سەرەتایی', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'ckb'],
            ['title' => 'جیرۆک', 'description' => 'جیرۆک', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'ckb'],


            ['title' => 'beginner', 'description' => 'beginner', 'difficulty' => 'beginner', 'active' => true, 'locale' => 'en'],
            ['title' => 'intermediate', 'description' => 'intermediate', 'difficulty' => 'intermediate', 'active' => true, 'locale' => 'en'],
            ['title' => 'advanced', 'description' => 'advanced', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'en'],
            ['title' => 'Tech preparation', 'description' => 'Tech preparation', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'en'],
            ['title' => 'Job preparation', 'description' => 'Job preparation', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'en'],
            ['title' => 'Coding preparation', 'description' => 'Coding preparation', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'en'],
            ['title' => 'Reinforcement', 'description' => 'Reinforcement', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'en'],
            ['title' => 'Stories', 'description' => 'Stories', 'difficulty' => 'advanced', 'active' => false, 'locale' => 'en'],

            ['title' => 'test', 'description' => 'test', 'difficulty' => 'intermediate', 'active' => false, 'locale' => 'ckb'], //?Kurdish test exercises
            ['title' => 'test', 'description' => 'test', 'difficulty' => 'intermediate', 'active' => false, 'locale' => 'en'], //?English test exercises
        ];

        Lesson::insert($lessons);
    }
}
