module.exports = {
  content: [
    './src/components/**/*.{js,svg}',
    './{src,content}/**/*.mdx',
    './src/helpers/badgeColorMap.json'
  ],
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
};
