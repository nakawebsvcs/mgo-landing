import { defineConfig } from "astro/config";
import path from 'path';

export default defineConfig({
    vite: {
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        '@assets': path.resolve('./src/assets'),
      },
    },
  devToolbar: {
    enabled: false,
  },
  site: "https://www.mauigiftoutlet.online",
}
});
