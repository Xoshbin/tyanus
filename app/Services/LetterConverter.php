<?php

namespace App\Services;

class LetterConverter
{

    protected $char_map = [
        'a' => 'ا', 'b' => 'ب', 'c' => 'ج', 'd' => 'د', 'e' => 'ە', 'f' => 'ف', 'g' => 'گ', 'h' => 'ھ',
        'i' => 'ح', 'j' => 'ژ', 'k' => 'ک', 'l' => 'ل', 'm' => 'م', 'n' => 'ن', 'o' => 'ۆ', 'p' => 'پ',
        'q' => 'ق', 'r' => 'ر', 's' => 'س', 't' => 'ت', 'u' => 'ئ', 'v' => 'ڤ',  'w' => 'و', 'x' => 'خ',
        'y' => 'ی', 'z' => 'ز', ' ' => ' ', ',' => '،', '.' => '.', ';' => '؛'
    ];

    function __cحnstruct()
    {
    }

    public function convertToEnglish($kurdishText)
    {
        $englishText = strtr($kurdishText, array_flip($this->char_map));
        return $englishText;
    }

    public function convertToKurdish($englishText)
    {
        $kurdishText = strtr($englishText, $this->char_map);
        return $kurdishText;
    }
}
