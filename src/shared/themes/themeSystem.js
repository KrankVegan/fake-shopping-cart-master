import { createTheme, responsiveFontSizes } from '@mui/material';

let themeSystem = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Indigo
      dark: '#283593', // Dark Indigo
      light: '#757de8', // Light Indigo
      contrastText: '#ffffff', // White
    },
    secondary: {
      main: '#ff9800', // Orange
      dark: '#f57c00', // Dark Orange
      light: '#ffb74d', // Light Orange
      contrastText: '#000000', // Black
    },
    background: {
      paper: '#f5f5f5', // Light Gray
      default: '#fafafa', // Slightly Darker Light Gray
    },
  },
});

themeSystem = responsiveFontSizes(themeSystem);

export default themeSystem;