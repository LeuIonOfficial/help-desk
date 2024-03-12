import { OutlinedInputProps } from '@mui/material'
import { ChangeEvent, FocusEvent } from 'react'

export type StyledProps = {
  gridRow?: string
}

export type PropsType = StyledProps &
  OutlinedInputProps & {
    label: string
    name: string
    errorMsg?: string
    size?: 'small' | 'medium'
    type?: 'text' | 'password' | 'email' | 'number'
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  }
