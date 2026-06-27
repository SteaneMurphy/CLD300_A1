import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    // Flight Centre red
    primary: {
      main: '#d40119',
      light: '#e3344a',
      dark: '#a30013',
      contrastText: '#ffffff',
    },
    // Complementary navy
    secondary: {
      main: '#002d72',
      light: '#33548e',
      dark: '#001f4f',
      contrastText: '#ffffff',
    },
    error:   { main: '#d32f2f' },
    warning: { main: '#ed9a00' },
    success: { main: '#2e7d32' },
    info:    { main: '#0288d1' },
    background: {
      default: '#ffffff',
      paper: '#f5f7fa',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5a6b85',
    },
  },

  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    // Poppins for display/headings
    h1: { fontFamily: '"Poppins", "Roboto", sans-serif', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontFamily: '"Poppins", "Roboto", sans-serif', fontSize: '2rem', fontWeight: 700, lineHeight: 1.25 },
    h3: { fontFamily: '"Poppins", "Roboto", sans-serif', fontSize: '1.5rem', fontWeight: 600 },
    h4: { fontFamily: '"Poppins", "Roboto", sans-serif', fontSize: '1.25rem', fontWeight: 600 },
    body1: { fontSize: '0.875rem', fontWeight: 100, lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  shape: {
    borderRadius: 8,
  },

  spacing: 8,

  components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
          variant: 'body1', 
        },
        styleOverrides: {
          root: ({ theme }) => ({
            display: 'inline-flex',
            alignItems: 'center',
            gap: theme.spacing(0.75),
            fontWeight: 'inherit',
            letterSpacing: '-0.02em',
          }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `,
      },
    },
});

export default theme;