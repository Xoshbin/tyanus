<?php

namespace App\Services;

use Intervention\Image\Facades\Image;
use App;

class CertificateGenerator
{
    function generate($lesson, $completedAT, $userProgress)
    {
        $img = Image::make(asset('img/certificates/certificate.png'));
        // write text
        $img->text(auth()->user()->name, 1000, 650, function ($font) {
            $font->file(public_path('fonts/feelfree/FeelfreeRegular.ttf'));
            $font->size(196);
            $font->color('#131312');
            $font->align('center');
        });
        $img->text('For the completion of the ' . $lesson->difficulty . ' level of touch typing at tyanus.com.', 1000, 800, function ($font) {
            $font->file(public_path('fonts/Poppins/Poppins-SemiBold.ttf'));
            $font->size(36);
            $font->color('#131312');
            $font->align('center');
        });
        $img->text(\Carbon\Carbon::parse($completedAT)->locale(App::getLocale() == 'ckb' ? 'ckb' : 'en')->isoFormat(' Do [of] MMMM YYYY'), 1000, 875, function ($font) {
            $font->file(public_path('fonts/Poppins/Poppins-SemiBold.ttf'));
            $font->size(36);
            $font->color('#131312');
            $font->align('center');
        });
        $img->text($userProgress->avg('typing_speed') . ' WPM', 615, 1150, function ($font) {
            $font->file(public_path('fonts/Poppins/Poppins-SemiBold.ttf'));
            $font->size(36);
            $font->color('#131312');
            $font->align('center');
        });
        $img->text($userProgress->avg('accuracy_percentage') . '%', 1400, 1150, function ($font) {
            $font->file(public_path('fonts/Poppins/Poppins-SemiBold.ttf'));
            $font->size(36);
            $font->color('#131312');
            $font->align('center');
        });
        $img->save(public_path('storage/certificates/' . auth()->user()->name . auth()->user()->id . '.jpg'));

        return $img->basePath();
    }
}
