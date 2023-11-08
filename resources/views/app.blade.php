<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @if (app()->getLocale() == 'ckb') dir="rtl" @endif>

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0Z9K10WHXQ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-0Z9K10WHXQ');
    </script>

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6978489323266231"
        crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ __('Page title') }}</title>

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/icons/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/icons/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/icons/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('/icons/site.webmanifest') }}">


    <meta name="description"
        content="Learn touch typing in Kurdish and English with our comprehensive online typing courses. Improve your typing speed and accuracy quickly and efficiently. Join us today to become a proficient typist.">
    <meta name="twitter:card"
        content="Learn touch typing in Kurdish and English with our comprehensive online typing courses. Improve your typing speed and accuracy quickly and efficiently. Join us today to become a proficient typist.">
    <meta property="og:locale" content="@if (app()->getLocale() == 'ckb') ku_ckb @else en @endif" />
    <meta property="og:site_name" content="Tyanus" />
    <meta name="keywords" content="{{ __('keywords') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
