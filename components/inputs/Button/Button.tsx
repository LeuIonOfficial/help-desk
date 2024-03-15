import { Button as MuiButton, CircularProgress } from '@mui/material'
import { Props } from './types'

export const Button = ({
  variant = 'contained',
  size = 'medium',
  children = '',
  isLoading = false,
  iconSize = 24,
  iconColor = 'inherit',
  disabled = false,
  onClick,
  type = 'button',
}: Props) => {
  return (
    <MuiButton
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
