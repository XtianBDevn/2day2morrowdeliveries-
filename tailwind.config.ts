import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        freight: {
          gold: {
            50: '#fef9e7',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#FDB927',
            500: '#FDB927',
            600: '#e5a820',
            700: '#c4941a',
            800: '#9f7a15',
            900: '#7a5e10',
          },
          purple: {
            DEFAULT: '#552583',
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#552583',
            900: '#552583',
          },
          red: {
            50: '#fff5f5',
            100: '#ffe3e3',
            200: '#ffc9c9',
            300: '#ffa8a8',
            400: '#ff8787',
            500: '#ff6b6b',
            600: '#fa5252',
            700: '#f03e3e',
            800: '#e03131',
            900: '#c92a2a',
          },
          black: {
            DEFAULT: '#0a0a0a',
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#0a0a0a',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
