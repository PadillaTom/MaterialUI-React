import { createMuiTheme } from '@material-ui/core/styles';

const mainBlue = '#86BBD8';
const mainGrayLight = '#b0b0af';

export default createMuiTheme({
  palette: {
    common: {
      lightGray: `${mainGrayLight}`,
      blue: `${mainBlue}`,
    },
    primary: {
      main: `${mainBlue}`,
    },
  },
});
