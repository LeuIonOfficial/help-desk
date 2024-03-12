import { Button as MuiButton, CircularProgress } from '@mui/material'
import { Props } from './types'

export const Button = ({
  variant = 'contained',
  children,
  isLoading,
  loadingIconSize,
  loadingIconColor = 'inherit',
  ...props
}: Props) => {
  if (isLoading) {
    return (
      <MuiButton
        startIcon={
          <CircularProgress size={loadingIconSize} color={loadingIconColor} />
        }
        disabled={true}
        variant={variant}
        {...props}
      >
        {children}
      </MuiButton>
    )
  }
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  )
}
