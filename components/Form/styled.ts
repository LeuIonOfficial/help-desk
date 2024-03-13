'use client'
import styled from '@emotion/styled'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`
export const Header = styled('div')`
  grid-column: ${({ gridColumn }) => gridColumn || '1/3'};
`

export const Footer = styled.div`
  grid-row: ${({ gridRow }) => gridRow};
  grid-column: ${({ gridColumn }) => gridColumn};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;
`
