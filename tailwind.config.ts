import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"IBM Plex Sans Thai Looped"',
          'sans-serif'
        ]
      },
      transitionProperty: {
        'scale': 'transform'
      }
    }
  },
  plugins: []
};
export default config;