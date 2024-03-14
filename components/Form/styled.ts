'use client'
import styled from '@emotion/styled'
import { StyledProps } from './types'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`
export const Header = styled('div')`
  grid-column: ${({ gridColumn }: StyledProps) => gridColumn || '1/3'};
`

export const Footer = styled('div')`
  display: grid;
  grid-row: ${({ gridRow }: StyledProps) => gridRow};
  grid-column: ${({ gridColumn }: StyledProps) => gridColumn};
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`
