// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Work Sans",
        cssVariable: "--font-worksans",
        weights: [400, 700, 800],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
