import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
})

export default theme
