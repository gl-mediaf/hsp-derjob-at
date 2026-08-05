import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Basis-URL der Seite. Beim Umzug auf die echte Domain NUR diese Zeile ändern.
  site: 'https://hsp-derjob-at.vercel.app',
  integrations: [tailwind()],
  output: 'static',
});
