import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                { src: "404.html", dest: "." },
                { src: "src/assets/home-logo.webp", dest: "assets" }, // Убедитесь, что 404.html есть в корне проекта
            ],
        }),
        ghPages(),
    ],
    base: "music-suggestion-app",
});
