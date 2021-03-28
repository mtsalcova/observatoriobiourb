import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#013A63',
      dark: '#012A4A',
      light: '#01497C'
    },
    secondary: {
      main: '#89C2D9',
      light: '#A9D6E5',
      dark: '#61A5C2',
      contrastText: '#7d7c83'
    }
  },
  typography: {
    htmlFontSize: 10
  },
  spacing: 4
});

export default defaultTheme;
