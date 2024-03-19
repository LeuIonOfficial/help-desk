import { Header } from '@components'
import React, { ReactNode } from 'react'

export const App = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
