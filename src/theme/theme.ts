import { createTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

/*
  Custom button variant for use with MUIs button component
*/
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    cta: true;
  }
}

/*
  Main site theme. The theme includes default values across all components that can be overridden
  at the component level.

  The design utilises primary and secondary colour schemes alongside accent, error and messaging colours.

  The typography is set here including the font family, fallbacks and specific values across different typography
  variants (ie; h1, h2, body1, etc).
*/
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {                                                                                           // Flight Centre red
      main: '#d40119',
      light: '#e3344a',
      dark: '#a30013',
      contrastText: '#ffffff',
    },
    secondary: {                                                                                         // Complementary navy
      main: '#002d72',
      light: '#33548e',
      dark: '#001f4f',
      contrastText: '#ffffff',
    },
    error:   { main: '#d32f2f' },
    warning: { main: '#ed9a00' },
    success: { main: '#007e68', dark: '#00604f', contrastText: '#ffffff' },                        // Teal colouring, used sparingly in some components
    info:    { main: '#0072ea', dark: '#005bc0', contrastText: '#ffffff' },                        // Call-to-action (buttons)
    accent: {                                                                                            // Offset accent surface (e.g. Trustpilot strip, footer)
      main: '#f5f5f5',
    },
    background: {                                                                                        // Main site background
      default: '#ffffff',
      paper: '#f5f7fa',
    },
    text: {                                                                                              // Text
      primary: '#212121',
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
    body2: { fontSize: '0.75rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  shape: {
    borderRadius: 8,
  },

  spacing: 8,

  /*
    Default values used across all MUI components like Container or AppBar. These include things like standardised
    spacing, as per the design system, padding, etc.
  */
  components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiAppBar: {
        defaultProps: {
          position: 'static',
        },
        styleOverrides: {
          root: ({ theme }) => ({
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(5),
          }),
        },
      },
      MuiToolbar: {
        defaultProps: {
          disableGutters: true,
        },
        styleOverrides: {
          root: {
            minHeight: 0,
          },
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
      MuiButton: {
        variants: [
          {
            props: { variant: 'cta' },
            style: ({ theme }) => ({
              paddingInline: theme.spacing(4),
              fontSize: '1rem',
              whiteSpace: 'nowrap',
              color: theme.palette.info.contrastText,
              backgroundColor: theme.palette.info.main,
              '&:hover': { backgroundColor: theme.palette.info.dark },
            }),
          },
        ],
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

/*
  Reusable style tokens. These were created to limit the amount of 'sx' code inside of individual components.
  The following were isolated and refactored here as they are commonly used and condense a block of code down to
  a single variable when needed to be used.
*/
export const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

export const flexBetween = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
} as const;

export const flexAlignCenter = {
  display: 'flex',
  alignItems: 'center',
} as const;

/*
  Carousel button styling used across the site. Defined and exported in the theme to reduce the amount of
  'sx' code inside of individual components.
*/
export const carouselButton = {
  bgcolor: 'common.white',
  boxShadow: 2,
  '&:hover': { bgcolor: 'common.white' },
} satisfies SxProps<Theme>;

/*
  Card styling used across the site. Defined and exported in the theme to reduce the amoun of 'sx'
  code inside of individual components.
*/
export const cardSurface = {
  bgcolor: 'background.default',
  borderRadius: 2,
  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
} satisfies SxProps<Theme>;

export default theme;
