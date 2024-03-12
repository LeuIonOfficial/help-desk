import { ButtonProps } from '@mui/material'

export type Props = ButtonProps & {
  isLoading?: boolean
  loadingIconSize?: number
  loadingIconColor?: 'primary' | 'secondary' | 'inherit'
}
