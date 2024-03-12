import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material'
import { forwardRef } from 'react'
import { PropsType } from './types'

export const Checkbox = forwardRef(({ label, name }: PropsType, ref) => (
  <FormControlLabel
    control={<MuiCheckbox />}
    label={label}
    name={name}
    ref={ref}
  />
))

Checkbox.displayName = 'Checkbox'
