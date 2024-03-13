import { CheckboxProps } from '@mui/material'
import { ChangeEvent } from 'react'

export type PropsType = {
  label?: string
  name?: string
  value?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
} & Pick<CheckboxProps, 'name' | 'disabled' | 'value' | 'size' | 'onChange'>
