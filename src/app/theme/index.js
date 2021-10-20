import { createTheme } from '@material-ui/core/styles';

const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      background: 'hsl(29, 99%, 99%)',
      border: 'hsl(29, 80%, 87%)',
      main: 'hsl(29, 80%, 50%)',
      contrastText: '#333',
    },
    secondary: {
      main: 'hsl(29, 80%, 50%)',
      // main: 'hsl(180, 50%, 50%)',
      contrastText: '#333',
    },
    // error: amber,
    error: {
      main: '#f2401b',
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  // Migration to typography v2
  typography: {
    useNextVariants: true
  }
};

export default {
  light: createTheme(lightTheme),
};
