/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Aus der Live-Seite ausgelesen (computed styles, 05.08.2026)
        'hsp-teal':      '#319ea3',  // Primärfarbe, alle CTAs
        'hsp-teal-dark': '#278185',  // Hover-Zustand
        'hsp-yellow':    '#e9b425',  // Akzent
        'hsp-ink':       '#1c1e21',  // Überschriften
        'hsp-body':      '#565656',  // Fließtext
        'hsp-muted':     '#424242',  // Namen unter Testimonials
        'hsp-light':     '#f9f9f9',  // graue Baender (NGO, Kununu)
        'hsp-red':       '#e2001a',  // Logo-Kreis
        'hsp-gruen':     '#9bc53d',  // Kreisblase am Videofenster, wie auf starten.hsp-derjob.at
      },
      fontFamily: {
        sans:  ['"Bunday Slab"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        slab:  ['"Bunday Slab"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'marquee': 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
