import { ThemeProvider, CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import theme from './theme/theme'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
