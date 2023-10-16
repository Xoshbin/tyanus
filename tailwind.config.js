import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                ibmplex: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
                naskh: ["Noto Naskh Arabic", ...defaultTheme.fontFamily.serif],
                notosans: ["Noto Sans Arabic", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
