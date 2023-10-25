import themeconfig from './src/config/theme.config.json';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      ...themeconfig.theme_settings,
    ],
  },
};
