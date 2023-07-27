import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    tomato: '#FF6155',
    darkSlateGrey: '#242742',
    charcoalGrey: '#36384D',
    white: '#FFFFFF',
  },
  breakpoints: {
    sm: 375,
    lg: 1440,
  },
  typography: {
    h1: {
      fontSize: '40px',
      fontWeight: 700,
      '@media (min-width.1440px)': {
        fontSize: '56px',
      },
    },
  },
});

theme.typography.h1 = {
    fontSize: "40px",
    fontWeight: 700,
    "@media (min-width:1440px)": {
      fontSize: "56px"
    },

}

theme.typography.h6 = {
    fontSize: "12px",
    fontWeight: 700
}

theme.typography.p = {
    fontSize: "16px",
    fontWeight: 400,
}

theme.typography.button = {
    fontSize: "16px",
    fontWeight: 700,
    color: "white"
}