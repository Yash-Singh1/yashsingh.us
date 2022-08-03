module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './{src,content}/**/*.mdx'],
  safelist: [
    ...['5', '4', '3', '2', '', ''].map((level) => `lg:text-${level}xl`),
    ...['3xl', '2xl', 'xl', 'lg', 'lg', 'lg'].map((level) => `text-${level}`),
  ],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
