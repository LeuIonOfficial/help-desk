import { UseFormRegisterReturn } from 'react-hook-form'
import { OutlinedInputProps } from '@mui/material'
import { ChangeEvent } from 'react'

export type PropsType = {
  label?: string
  errorMsg?: string
  register?: UseFormRegisterReturn<string>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  size?: 'small' | 'medium'
  type?: 'text' | 'password' | 'email' | 'number'
} & StyledProps & OutlinedInputProps

export interface StyledProps {
  gridRow?: string
}
