import { Themes } from '@geist-ui/core';

const balooTheme = Themes.createFromDark({
  type: 'baloo',
  font: {
    sans: "'Baloo Bhai 2', cursive",
    prism: "'Baloo Bhai 2', cursive",
  },
  palette: {
    foreground: '#ddd',
  },
});

export default balooTheme;
