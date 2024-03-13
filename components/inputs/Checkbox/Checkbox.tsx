import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import { forwardRef } from 'react'
import { PropsType } from './types'

export const Checkbox = forwardRef(
  (
    {
      label,
      name,
      value,
      disabled = false,
      size = 'small',
      onChange,
      checked,
    }: PropsType,
    ref
  ) => (
    <FormControlLabel
      control={
        <MuiCheckbox
          value={value}
          size={size}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
        />
      }
      label={label}
      name={name}
      ref={ref}
    />
  )
)

Checkbox.displayName = 'Checkbox'
