module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './{src,content}/**/*.mdx'],
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
};
