import { ThemeProvider, CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
// Roboto — body / UI
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// Poppins — display / headings
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import theme from './theme/theme'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
