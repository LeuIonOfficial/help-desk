import { Header } from '@components'
import React, { ReactNode } from 'react'
require('../mock/msw')

export const App = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
