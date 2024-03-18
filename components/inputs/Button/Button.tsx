import { Button as MuiButton, CircularProgress } from '@mui/material'
import { Props } from './types'
import { Ref, forwardRef } from 'react'

const ButtonComponent = (
  {
    variant = 'contained',
    size = 'medium',
    children = '',
    isLoading = false,
    iconSize = 24,
    iconColor = 'inherit',
    disabled = false,
    onClick,
    type = 'button',
  }: Props,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <MuiButton
      ref={ref}
      onClick={onClick}
      disabled={isLoading || disabled}
      size={size}
      variant={variant}
      type={type}
      startIcon={
        isLoading && <CircularProgress size={iconSize} color={iconColor} />
      }
    >
      {children}
    </MuiButton>
  )
}

export const Button = forwardRef(ButtonComponent)
