<?php

namespace Database\Seeders;

use App\Models\Exercise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $exercies = [
            ['lesson_id' => '1', 'title' => 'ف، ژ، لەگەڵ سپەیس', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ئـ، ر لەگەڵ ک', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'د، ە، لەگەڵ ح', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ج، گ لەگەل ن', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'پێداچونەوەی ١', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ت، س، لەگەڵ ل', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ۆ، ب لەگەڵ ا', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ڤ، ھ لەگەل م', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'نوقتە، لەگەڵ کۆما لەگەڵ ز', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'پێداچونەوەی ٢', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'و، خ لەگەڵ ؛', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ق، ی لەگەڵ پ', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ش، ڵ لەگەڵ ێ', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'چ، ڕ', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'ع، غ', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '1', 'title' => 'کۆی بەشی سەرەتایی', 'locale' => 'ckb', 'target_speed' => 60],

            ['lesson_id' => '2', 'title' => 'ووشە زۆر باوەکان', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'ڕیزی ناوەڕاست', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'ڕیزی سەرەوە', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'ڕیزی خوارەوە', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'ووشەی شیفتەکان', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'خاڵبەندی', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'خاڵبەندی پێشکەوتوو', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'ڕستەی کورت', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'پەرەگرافی کورت', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'مەشقی خێرا', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '2', 'title' => 'پێداچونەوەی ناوەندی', 'locale' => 'ckb', 'target_speed' => 60],

            ['lesson_id' => '9', 'title' => 'J, F, and Space', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'U, R, and K Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'D, E, and I Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'C, G, and N Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'Beginner Review 1', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'T, S, and L Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'O, B, and A Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'V, H, and M Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'Z, Period and Comma', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'Beginner Review 2', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'W, X, and ; Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'Q, Y, and P Keys', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '9', 'title' => 'Beginner Wrap-up', 'locale' => 'en', 'target_speed' => 60],

            ['lesson_id' => '10', 'title' => 'Common English Words', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Easy Home Row Words', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Easy Top Row Words', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Easy Bottom Row Words', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Shift Key and Capitalization', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Basic Punctuation', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Intermediate Punctuation', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Quick Sentences', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Short Paragraphs', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Speed Drills', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '10', 'title' => 'Intermediate Wrap-up', 'locale' => 'en', 'target_speed' => 60],

            //?Kurdish test exercises
            ['lesson_id' => '17', 'title' => 'Timed Tests', 'locale' => 'ckb', 'target_speed' => 60],
            ['lesson_id' => '17', 'title' => 'Page Tests', 'locale' => 'ckb', 'target_speed' => 60],

            //?English test exercises
            ['lesson_id' => '18', 'title' => 'Timed Tests', 'locale' => 'en', 'target_speed' => 60],
            ['lesson_id' => '18', 'title' => 'Page Tests', 'locale' => 'en', 'target_speed' => 60],
        ];

        Exercise::insert($exercies);
    }
}
