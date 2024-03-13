import { Header } from '@/components'
import { ReactNode } from 'react'
import * as S from './styled'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <S.Body>
        <Header />
        {children}
      </S.Body>
    </html>
  )
}
