import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const themeOptions = {
  typography: {
    fontFamily: ['Poppins'],
  },
  breakpoints: {
    values: {
      xs: 0,
      s: 300,
      sy: 350,
      sx: 400,
      szm: 450,
      sm: 600,
      m: 750,
      md: 900,
      laptop: 1024,
      laptopM: 1200,
      laptopL: 1440,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        #root{
          height: 100vh;
        }
        body {
          background-color: #E1E2E1;
        }
      `,
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
