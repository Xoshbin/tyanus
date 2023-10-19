<?php

namespace App\Services;

use Intervention\Image\Facades\Image;
use App;

class ShareImageGenearator
{
    function generate($wpm)
    {
        $img = Image::make(asset('img/share-new.png'));
        // write text
        $img->text($wpm, 350, 570, function ($font) {
            $font->file(public_path('fonts/Poppins/Poppins-Black.ttf'));
            $font->size(48);
            $font->color('#131312');
            $font->align('center');
        });

        $img->save(public_path('storage/shares/' . 'shared' . auth()->user()->id . '.jpg'));

        return $img->basePath();
    }
}
