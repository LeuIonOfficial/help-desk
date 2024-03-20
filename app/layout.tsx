import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '@utils'
import { App } from './app'
import { GlobalStyles } from '@components'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  )
}
