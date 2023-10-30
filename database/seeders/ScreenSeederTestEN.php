<?php

namespace Database\Seeders;

use App\Models\Screen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use  App\Services\LetterConverter;

class ScreenSeederTestEN extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $converter = new LetterConverter();
        $screens = [
            ['lesson_id' => 18, 'order' => 1, 'exercise_id' => 54, 'title' => 'test - 1', 'content_type' => 'test', 'content' => 'Once upon a time, in a quaint little village nestled between rolling hills, there lived a curious young boy named Leo. Leo had always been fascinated by the stars that glittered in the night sky. Every evening, he would climb to the top of a nearby hill, lie on his back, and gaze up at the vast expanse of the cosmos. He dreamt of exploring the far reaches of space and discovering the secrets it held.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 2, 'exercise_id' => 54, 'title' => 'test - 2', 'content_type' => 'test', 'content' => 'In a bustling city, where the streets were always filled with people rushing to their destinations, there lived an old man named Samuel. Samuel had a small, cozy bookstore that had been in his family for generations. Despite the digital age, he cherished the smell of old books and the sound of pages turning. His little shop was a haven for book lovers seeking refuge from the fast-paced world outside.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 3, 'exercise_id' => 54, 'title' => 'test - 3', 'content_type' => 'test', 'content' => 'In a quaint, coastal town, where the salty breeze kissed the cheeks of its residents, there was a lighthouse perched on a rocky cliff. This lighthouse was known as \'The Beacon of Hope\' and had guided sailors safely through stormy nights for generations. Its glowing light was a symbol of comfort to all who called the town their home.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 4, 'exercise_id' => 54, 'title' => 'test - 4', 'content_type' => 'test', 'content' => 'In a lush, enchanted forest, where the leaves whispered secrets to the creatures that roamed beneath their canopy, there lived a wise old owl named Oliver. Oliver spent his days perched high in the tallest tree, sharing his wisdom with all who sought it. His hoots echoed through the forest, guiding lost souls back to the path of enlightenment.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 5, 'exercise_id' => 54, 'title' => 'test - 5', 'content_type' => 'test', 'content' => 'In a distant land, where the mountains kissed the sky and the rivers sang with crystal-clear waters, there was a hidden valley known as \'Serene Haven.\' In this valley, time seemed to slow down, and the people lived in harmony with nature. The laughter of children and the rustling of leaves were the only sounds that graced their peaceful days.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 6, 'exercise_id' => 54, 'title' => 'test - 6', 'content_type' => 'test', 'content' => 'In a bustling metropolis, where skyscrapers pierced the heavens and neon lights painted the night sky with colors, there was a street musician named Ella. With her guitar in hand and a voice like honey, she played her heart out every evening in the hope that her music would touch the souls of passersby and bring a moment of serenity to their busy lives.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 7, 'exercise_id' => 54, 'title' => 'test - 7', 'content_type' => 'test', 'content' => 'In a coastal village, where the waves whispered secrets to the shore and seagulls danced in the salty breeze, there lived a fisherman named Luca. Every morning, Luca set out in his weathered boat, casting his net into the sea in search of the day\'s catch. The rhythm of the tides was his companion, and the ocean was his muse.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 8, 'exercise_id' => 54, 'title' => 'test - 8', 'content_type' => 'test', 'content' => 'In a peaceful garden, where flowers swayed to the gentle whispers of the wind and butterflies painted the air with colors, there was an elderly gardener named Lily. With her wrinkled hands and a heart full of love, she tended to the blossoms, knowing that in every petal and leaf, she found a piece of solace and beauty that she shared with the world.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 9, 'exercise_id' => 54, 'title' => 'test - 9', 'content_type' => 'test', 'content' => 'In a bustling market square, where the aroma of spices and the chatter of vendors filled the air, there was a young girl named Maya. With a twinkle in her eye and a basket in her hand, she weaved through the crowds, selling the juiciest fruits her family had grown. Her smile was as bright as the sun, and her laughter was a melody that echoed through the square.',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 10, 'exercise_id' => 54, 'title' => 'test - 10', 'content_type' => 'test', 'content' => 'In a quiet village, nestled among emerald hills and beside a glistening river, there lived a skilled potter named Emma. With hands that molded clay into works of art, she created pottery that told stories of the land and its people. Her creations adorned the homes of villagers and travelers alike, carrying the essence of the tranquil village',  'target_speed' => 60, 'locale' => 'en'],
            ['lesson_id' => 18, 'order' => 11, 'exercise_id' => 54, 'title' => 'test - 11', 'content_type' => 'test', 'content' => 'In a quaint, seaside town, where seashells and sunsets were the treasures of the day, there lived a lighthouse keeper named Oliver. With dedication in his heart and a lantern in hand, he climbed the spiraling staircase each evening to tend to the beacon that guided ships safely home. His vigilance ensured the safety of countless voyagers.',  'target_speed' => 60, 'locale' => 'en'],

            //? Removed the enter key in the exercises since it's not possible to catch it

            // ['lesson_id' => 9, 'order' => 2, 'exercise_id' => 17, 'title' => 'ز - 2', 'content_type' => 'letters', 'content' => '↵↵↵↵↵↵↵↵;;;;↵↵↵↵;;↵↵;;↵↵;↵;↵;↵;↵',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 3, 'exercise_id' => 17, 'title' => 'ز - 3', 'content_type' => 'letters', 'content' => 'zzzaaa↵↵;;zzaa↵;zzzaaa↵↵z↵↵zz↵↵zzaa↵↵;;↵;↵;zaza',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 4, 'exercise_id' => 17, 'title' => 'ز - 4', 'content_type' => 'letters', 'content' => 'azzzzzzazzzazzzazzzazzz;;;↵↵;;↵;↵↵;;↵;↵',  'target_speed' => 60, 'locale' => 'en'],

            // ['lesson_id' => 9, 'order' => 1, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 1', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 2, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 2', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 3, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 3', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 4, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 4', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 5, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 5', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 6, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 6', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 7, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 7', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 8, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 8', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 9, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 9', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 10, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 10', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 11, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 11', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
            // ['lesson_id' => 9, 'order' => 12, 'exercise_id' => 32, 'title' => 'O, B, and A Keys - 12', 'content_type' => 'letters', 'content' => '',  'target_speed' => 60, 'locale' => 'en'],
        ];

        foreach ($screens as $screenData) {
            Screen::create($screenData);
        }
    }
}
