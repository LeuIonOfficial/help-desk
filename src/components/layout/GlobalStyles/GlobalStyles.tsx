'use client'
import { Global, css } from '@emotion/react'

export const GlobalStyles = () => {
  const styles = css`
    body {
      margin: 0 !important;
      padding: 0 !important;
    }
  `

  return <Global styles={styles} />
}
