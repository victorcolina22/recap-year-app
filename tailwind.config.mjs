import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        'fade': 'fade 1s ease',
        'fadeUp': 'fadeUp 1s ease',
        'fadeDown': 'fadeDown 1s ease',
        'fadeLeft': 'fadeLeft 1s ease',
        'fadeRight': 'fadeRight 1s ease',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'fade': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fadeUp': {
          from: { transform: 'translateY(80%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeDown': {
          from: { transform: 'translateY(-80%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeLeft': {
          from: { transform: 'translateX(-20%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeRight': {
          from: { transform: 'translateX(20%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    screens: {
      'xs': '580px'
    }
  },
	plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
      );
    }),
  ],
}
