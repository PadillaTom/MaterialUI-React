import { createMuiTheme } from '@material-ui/core/styles';

// Color Palette:
const mainBgColor = '#F7F7F7';
const ctaGreen = '#12784A';
const mainGrayDark = '#212121';
const mainWhite = '#ffffff';
const transparent = 'transparent';

// Main Theme:

export default createMuiTheme({
  palette: {
    common: {
      mainBgColor: `${mainBgColor}`,
      ctaGreen: `${ctaGreen}`,
      mainGrayDark: `${mainGrayDark}`,
      transparent: `${transparent}`,
    },
    primary: {
      main: `${mainWhite}`,
    },
    secondary: {
      main: `${ctaGreen}`,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans', 'sans-serif'].join(','),
    tab: {
      fontFamily: 'Montserrat',
      letterSpacing: '1.3px',
      fontWeight: '600',
    },
  },
});
