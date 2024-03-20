'use client'
import { createTheme } from '@mui/material'
export const theme = createTheme({
  palette: {
    primary: {
      main: '#D56F00', // Orange color
    },
  },
  shape: {
    borderRadius: 10, // Border radius for all elements
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 10, // Border radius for inputs
        },
      },
    },
  },
})
