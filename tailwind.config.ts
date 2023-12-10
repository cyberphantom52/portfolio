import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
       },
       fontFamily: {
        'usual': ['Usual', 'sans-serif']
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
        ".horizontal-writing-tb": { "writing-mode": "horizontal-tb" },
        ".vertical-writing-rl": { "writing-mode": "vertical-rl" },
        ".vertical-writing-lr": { "writing-mode": "vertical-lr" },
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
        ".orientation-mixed": { "text-orientation": "mixed" },
        ".orientation-upright": { "text-orientation": "upright" },
        ".orientation-sideways-right": { "text-orientation": "sideways-right" },
        ".orientation-sideways": { "text-orientation": "sideways" },
        ".orientation-glyph": { "text-orientation": "use-glyph-orientation" },
      });
    }),
  ],
  darkMode: 'class',
}
export default config
