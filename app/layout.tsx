import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '@theme'
import { GlobalStyles, Header } from '@components'

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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
