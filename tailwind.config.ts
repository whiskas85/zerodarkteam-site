import type { Config } from 'tailwindcss';

const sans = [
  '"Segoe UI Variable Text"',
  '"Segoe UI"',
  'Inter',
  'system-ui',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
];

/**
 * I colori del logo: nero, verde del visore notturno, il tricolore. Sono gli
 * stessi del gestionale, perche' chi passa dal sito a OPS deve sentirsi nello
 * stesso posto.
 */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050605',
        surface: '#0e110e',
        surface2: '#151a15',
        line: '#232a23',
        ink: '#e7ede7',
        muted: '#7f8a7f',
        nvg: '#4cff00',
        nvgdim: '#34ad00',
        itgreen: '#008c45',
        itred: '#cd212a',
        warn: '#ffb300',
        danger: '#ff4438',
      },
      fontFamily: { sans, mono: sans },
      boxShadow: {
        nvg: '0 0 0 1px rgba(76,255,0,.35), 0 0 24px -6px rgba(76,255,0,.45)',
      },
    },
  },
  plugins: [],
} satisfies Config;
