<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ app()->getLocale() == 'ckb' ? 'rtl' : 'ltr' }}">

<head>
    @if (app()->environment('production'))
        <!-- Google Tag Manager -->
        @if (config('services.google_tag_manager.id'))
            <script>
                (function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', '{{ config('services.google_tag_manager.id') }}');
            </script>
        @endif
        <!-- End Google Tag Manager -->

        @if (config('services.google_adsense.id'))
            <script async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={{ config('services.google_adsense.id') }}"
                crossorigin="anonymous"></script>
        @endif
    @endif
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
    @if (app()->environment('production') && config('services.google_tag_manager.id'))
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe
                src="https://www.googletagmanager.com/ns.html?id={{ config('services.google_tag_manager.id') }}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    @endif
    @inertia
</body>

</html>
