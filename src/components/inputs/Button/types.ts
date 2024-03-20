import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

export type Props = {
  /**
   * The class name of the button
   */
  className?: string
  /**
   * The content of the button
   */
  children: ReactNode
  /**
   * The function to be called when the button is clicked
   */
  onClick?: () => void
  variant?: 'outlined' | 'contained' | 'text'
  size?: 'small' | 'medium' | 'large'
  /**
   * The type of the button
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * If true, the button will be disabled
   * @default false
   */
  isLoading?: boolean
  /**
   * Changes the size of the loading icon
   * @default 24
   */
  iconSize?: number
  /**
   * Changes the color of the button icon
   * @default 'inherit'
   */
  iconColor?: 'primary' | 'secondary' | 'inherit'
} & Pick<
  ButtonProps,
  | 'className'
  | 'children'
  | 'onClick'
  | 'variant'
  | 'size'
  | 'type'
  | 'disabled'
>
