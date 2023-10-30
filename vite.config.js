import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    /**
     * When using Sail, Vite will try to serve assets from 0.0.0.0,
     * which will not resolve outside of the Docker containers.
     * To fix this, manually configure the host for HMR in vite.config.js.
     */
    server: {
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
});
