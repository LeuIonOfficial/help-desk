'use client'
import * as S from './styled'
import { ReactNode } from 'react'

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <S.Container>{children}</S.Container>
}

export default PageLayout
