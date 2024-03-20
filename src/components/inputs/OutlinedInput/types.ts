import { OutlinedInputProps } from '@mui/material'
import { ChangeEvent, FocusEvent } from 'react'

export type StyledProps = {
  $gridRow?: string
}

export type PropsType = {
  gridRow?: string
  label?: string
  name: string
  /**
   * The error message to be displayed
   */
  errorMessage?: string
  size?: 'small' | 'medium'
  type?: 'text' | 'password' | 'email' | 'number'
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
} & Pick<
  OutlinedInputProps,
  | 'placeholder'
  | 'fullWidth'
  | 'name'
  | 'size'
  | 'type'
  | 'value'
  | 'onChange'
  | 'onBlur'
  | 'disabled'
>
