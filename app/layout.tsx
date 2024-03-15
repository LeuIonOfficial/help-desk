import { Header } from '@/components'
import { ReactNode } from 'react'
import * as S from './styled'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <S.Body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </S.Body>
    </html>
  )
}
