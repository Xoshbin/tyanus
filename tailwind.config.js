import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            backgroundImage: {
                "blob-blue": "url('/public/img/blob-blue-bg2.svg')",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                ibmplex: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
                naskh: ["Noto Naskh Arabic", ...defaultTheme.fontFamily.serif],
                notosans: ["Noto Sans Arabic", ...defaultTheme.fontFamily.sans],
                feelfree: ["feelfree"],
            },
            colors: {
                kblue: {
                    50: "#eff6ff",
                    100: "#dbebfe",
                    200: "#c0ddfd",
                    300: "#9acbfc",
                    400: "#62a9f8",
                    500: "#3d87f4",
                    600: "#2769e9",
                    700: "#1f54d6",
                    800: "#2045ad",
                    900: "#1f3e89",
                    950: "#182753",
                },
                kyellow: {
                    50: "#fdfbe9",
                    100: "#fcf7c5",
                    200: "#fbee98",
                    300: "#f8da4c",
                    400: "#f3c61c",
                    500: "#e3ae0f",
                    600: "#c4860a",
                    700: "#9c5f0c",
                    800: "#824c11",
                    900: "#6e3e15",
                    950: "#401f08",
                },
            },
            keyframes: {
                jump: {
                    "0%": { transform: "translateY(0%)" },
                    "50%": { transform: "translateY(5%)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
            animation: {
                jump: "jump 8s linear infinite",
            },
        },
    },

    plugins: [forms],
});
