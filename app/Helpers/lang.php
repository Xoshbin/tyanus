<?php


//added to help with localizatin in inertia and react
// https://github.com/raprmdn/laravel-multi-language
function translations($file)
{
    if (!file_exists($file)) {
        return [];
    }

    return json_decode(file_get_contents($file), true);
}
