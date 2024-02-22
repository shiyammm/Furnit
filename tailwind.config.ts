import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        PollerOne: ['PollerOne', 'sans-serif'],
        RalewayRomanBold: ['RalewayRomanBold', 'sans-serif'],
        RalewatSemiBold: ['RalewatSemiBold', 'sans-serif'],
        RubikBold: ['RubikBold', 'sans-serif'],
        RubikMedium: ['RubikMedium', 'sans-serif'],
        RubikRegular: ['RubikRegular', 'sans-serif'],
        RubikSemiBold: ['RubikSemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
