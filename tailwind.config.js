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
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "1.5rem",
                    lg: "2rem",
                    xl: "2.5rem",
                },
            },
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
                primary: {
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
                    DEFAULT: "#2769e9",
                },
                accent: {
                    DEFAULT: "#f3c61c",
                },
                surface: "#ffffff",
                "surface-muted": "#f3f4f6",
                "border-subtle": "#e5e7eb",
                success: {
                    DEFAULT: "#16a34a",
                    soft: "#dcfce7",
                },
                warning: {
                    DEFAULT: "#f59e0b",
                    soft: "#fef3c7",
                },
                error: {
                    DEFAULT: "#dc2626",
                    soft: "#fee2e2",
                },
                info: {
                    DEFAULT: "#0ea5e9",
                    soft: "#e0f2fe",
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
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
            boxShadow: {
                soft: "0 10px 25px rgba(15, 23, 42, 0.08)",
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
});
