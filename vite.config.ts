import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  appType: "spa",
  plugins: [svelte({
    compilerOptions: {
      dev: true
    }
  }), VitePWA({
    devOptions: {
      enabled: true
    },
    includeAssets: ["./public/*.ico", "./public/*.png", "./public/*.svg"],
    manifest: {
      "name": "Baby Tracker",
      "short_name": "BabyTracker",
      "description": "Helps remembering the last time you nursed your little one.",
      "icons": [
        {
          "src": "/assets/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/assets/maskable_icon_x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
      "theme_color": "#1e293b",
      "background_color": "#1e293b",
      "display": "standalone"
    }
  })]

});
