import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        tomato: '#FF6155',
        darkSlateGrey: '#242742',
        charcoalGrey: '#36384D',
        white: '#FFFFFF'
    },
    breakpoints: {
        sm: 375,
        lg: 1440
    }
})