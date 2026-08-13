import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// Versionen sind bewusst exakt gepinnt (siehe package.json).
// @astrojs/vercel 9.x gehoert zu Astro 5. Ab Version 10 wird Astro 6 verlangt,
// ab 11 sogar Astro 7 - beides bricht den Build. Kein `npm audit fix --force`.

export default defineConfig({
  // Basis-URL der Seite. Beim Umzug auf die echte Domain NUR diese Zeile ändern.
  site: 'https://hsp-derjob-at.vercel.app',
  integrations: [tailwind()],

  // Alle Seiten werden weiterhin vorab gebaut. Nur einzelne Routen, die
  // `export const prerender = false` setzen, laufen als Serverfunktion -
  // aktuell ausschliesslich /api/anfrage.
  output: 'static',
  adapter: vercel(),
});
