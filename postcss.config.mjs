const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)', 'sans-serif'],
        display: ['var(--font-funnel-display)', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out',
      },
    },
  },
};

export default config;
