import { ReactNode } from 'react'
import * as S from './styled'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { ToastContainer } from 'react-toastify'
import { App } from './app'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <S.Body>
        <ThemeProvider theme={theme}>
          <App>{children}</App>
        </ThemeProvider>
        <ToastContainer />
      </S.Body>
    </html>
  )
}
