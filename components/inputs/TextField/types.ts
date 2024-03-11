import { UseFormRegisterReturn } from 'react-hook-form'
import { OutlinedInputProps } from '@mui/material'
import { ChangeEvent } from 'react'

export type PropsType =
  | {
      size: string
      label?: string
      inputId?: string
      errorMsg?: string
      register?: UseFormRegisterReturn<string>
      onChange: (e: ChangeEvent<HTMLInputElement>) => void
    }
  | OutlinedInputProps
  | StyledProps

export interface StyledProps {
  gridRow?: string
}
