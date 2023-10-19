<?php

namespace Database\Seeders;

use App\Models\Screen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use  App\Services\LetterConverter;

class ScreenSeederTestKU extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $converter = new LetterConverter();
        $screens = [
            ['lesson_id' => 17, 'order' => 1, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ١', 'content_type' => 'test', 'content' => 'سەردەمانێک لە دۆڵە گەشاوەکانی کوردستاندا، کە چرپەی چیا کۆنەکان لەگەڵ لێشاوی نەرمی ڕووبارەکاندا یەکدەگرنەوە، دارێکی زمانزانی کۆنی ژیر بە ناوی ڕۆشنا دەژیا. ڕۆشنا شاهیدی دابەزین و ڕۆیشتنی نەوەکان بوو، بەڵام لەگەڵ ئەوەشدا ڕەگ و ڕیشەی لە حیکمەتەکەیدا مابووەوە.بەرەبەیانێکی نەورۆز، شوانێکی گەنجی کورد بە ناوی کاروان لە ژێر لقە بەرفراوانەکانی ڕۆشنا پەنای برد. کاروان کە مەڕەکانی لە نزیکەوە دەلەوەڕین، خەونەکانی لەگەڵ دارە زمانزانەکەدا دابەش دەکرد. تامەزرۆی ئەوە بوو ببێتە شاعیر، جوانی زێدی خۆی بە وشە بنەخشێنێت.ڕۆشنا گوێی لێ بوو، گەڵاکانی وەک لاپەڕەی شیعری لەبیرکراو دەقیژاند. بە چرپە گوتی: "لە دڵی هەموو کوردێکدا شاعیرێک هەیە چاوەڕێیە بەئاگا بێتەوە".کاروان بە ئیلهام وەرگرتن لە حیکمەتی داری زمانزانی کۆن، قەڵەمەکەی هەڵگرت و دەستی کرد بە نووسین، قسەکانی وەک ئاوازەکانی مۆسیقای کوردی بوو. لە ژێر نیگاو چاودێری ڕۆشنادا، شاعیرێکی نوێی کورد سەریهەڵدا، بەیتەکانی دەنگدانەوەی ڕۆحی شێرکۆ بێکەس و جوانییەکانی نیشتمان بوو.',  'target_speed' => 60, 'locale' => 'ckb'],
            ['lesson_id' => 17, 'order' => 2, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٢', 'content_type' => 'test', 'content' => 'لە ناو بازاڕە قەرەباڵغەکانی هەولێردا، گەنجێکی کتێبفرۆشی کورد بە ناوی زارا کتيبيکی نهێنی لەناو کتێبە کۆنەکانی باوکیدا دۆزییەوە، لاپەڕەکانی پڕ بوون لە ئەفسانەی لەبیرکراوی کوردی.ئێوارەیەک کە خۆر لە ژێر ئاسۆدا نوقم بوو، زارا دەستی کرد بە خوێندنەوەی پەرتووکەکە. باسی لە شوێنێکی عیرفانیی دەکرد کە لە قووڵایی چیای زاگرۆسدا شاراوەتەوە- پیرۆزگایەک کە خەونەکان تێیدا فۆرمیان گرتبوو.زارا بە پەرۆشییەوە دەستی بە گەشتەکەی کرد بە ناو شاخ و دۆڵەکاندا. لەگەڵ هەر هەنگاوێکدا هەستی بە ئامادەبوونی باوباپیرانی دەکرد کە ڕێنوێنیان دەکرد. لە کۆتاییدا گەیشتە شوێنی مەبەست کە شوێنێکی پیرۆزی نهێنی بوو.لەوێ لە نێوان سنەوبەرە چڕەکاندا لەگەڵ گۆرانی و جریوەی باڵندەکاندا، زارا ئەوەی بەدوایدا دەگەڕا، دۆزییەوە- چەقۆیەکی ئەفسوناوی کە چەند ووشەیەکی لەسەر نوسرابوو کە نهێنی ژیانیان هەڵگرتبو.نهێنییەکەی زارا کە لەلایەن زاگرۆسییەکان(کوردەکان)ەوە پاسەوانی دەکرا، زارایان فێرکرد کە پرسیارکردن و فێربوون نهێنی ژیانن و ڕێگات بۆ ڕۆشن دەکەنەوە.',  'target_speed' => 60, 'locale' => 'ckb'],
            ['lesson_id' => 17, 'order' => 3, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٣', 'content_type' => 'test', 'content' => 'لە گوندێکی دابڕاوو وێراندا کە لە نێوان شاخەکاندا هەڵکەوتبوو، کچێکی گەنج بە ناوی هاژین خاوەنی دیارییەکی سەرو سروشت بوو. دەیتوانی لە زمانی باڵندەکان تێبگات. هەموو بەیانیەک لە ژێر دارێکی بەرزی گوندەکەیاندا دادەنیشت و گوێی لە گفتوگۆو مێلۆدی باڵندەکان دەگرت. ڕۆژێک کە گوێی لە ڕەوەیەک کاروان بوو، باسی دارستانێکی دووریان دەکرد کە گوڵێکی ئەفسانەیی لێیە لە سەدەیەکدا تەنها جارێک دەپشکوێت. دەگوترا هەرکەسێک ئەم گوڵە بدۆزێتەوە یەکێک لە ئاواتەکانی دێتەدی. هاژین بە پەرۆشییەوە دەستی بە گەشتەکەی کرد، بە ڕێنمایی باڵندەکان. لە ڕێگەی دارستانە چڕەکانەوە و بەسەر چەمە پێچاوپێچەکاندا، دواجار گەیشتە ئەو کانییە شاراوەیەی کە گوڵە ئەفسوناوییەکە تێیدا گەشە دەکات. هاژین بە دڵێکی پڕ لە هیواوە، ئاواتەکەی خستەڕوو- ئاواتێک بۆ یەکگرتوویی و خۆشگوزەرانی لە گوندە خۆشەویستەکەیدا. لەگەڵ گەڕانەوەی بۆ ماڵەوە، گوندەکە گۆڕانکاری بەسەردا هات. ناکۆکییەکان وەلا نران و خەڵکەکە کۆبوونەوە، ئیلهامیان لە گەشتەکەی هاژین و ئاواتەکەی بۆ یەکگرتویی گەلەکەی وەرگرت. ئەوان تێگەیشتن کە گەورەترین گەنجینەکان لە دارستانە دوورەکاندا نادۆزرێتەوە بەڵکو لەناو دڵی خۆیاندا دەدۆزرێتەوە. دیارییەکەی هاژین کە بە ڕێنمایی باڵندەکان دۆزرایەوە، گوندەکەی لەیەکتر نزیککردەوەو توانییان ڕوبەڕوی ئاڵنگارییەکان ببنەوە.',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 4, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٤', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 5, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٥', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 6, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٦', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 7, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٧', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 8, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٨', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 9, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ٩', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 10, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ١٠', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 11, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس - ١١', 'content_type' => 'test', 'content' => '',  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 17, 'order' => 12, 'exercise_id' => 52, 'title' => 'ف، ژ، لەگەڵ سپەیس', 'content_type' => 'badge', 'content' => '',  'target_speed' => 0, 'locale' => 'ckb'],

            //? Removed the enter key in the exercises since it's not possible to catch it

            // ['lesson_id' => 1, 'order' => 2, 'exercise_id' => 17, 'title' => 'ز - ٢', 'content_type' => 'letters', 'content' => $converter->convertToKurdish('↵↵↵↵↵↵↵↵;;;;↵↵↵↵;;↵↵;;↵↵;↵;↵;↵;↵'),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 3, 'exercise_id' => 17, 'title' => 'ز - ٣', 'content_type' => 'letters', 'content' => $converter->convertToKurdish('zzzaaa↵↵;;zzaa↵;zzzaaa↵↵z↵↵zz↵↵zzaa↵↵;;↵;↵;zaza'),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 4, 'exercise_id' => 17, 'title' => 'ز - ٤', 'content_type' => 'letters', 'content' => $converter->convertToKurdish('azzzzzzazzzazzzazzzazzz;;;↵↵;;↵;↵↵;;↵;↵'),  'target_speed' => 60, 'locale' => 'ckb'],

            // ['lesson_id' => 1, 'order' => 1, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ١', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 2, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٢', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 3, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٣', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 4, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٤', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 5, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٥', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 6, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٦', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 7, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٧', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 8, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٨', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 9, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ٩', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 10, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ١٠', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 11, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ١١', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
            // ['lesson_id' => 1, 'order' => 12, 'exercise_id' => 5, 'title' => 'ۆ، ب لەگەڵ ا - ١٢', 'content_type' => 'letters', 'content' => $converter->convertToKurdish(''),  'target_speed' => 60, 'locale' => 'ckb'],
        ];

        Screen::insert($screens);
    }
}
