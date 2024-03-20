import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import { Ref, forwardRef } from 'react'
import { PropsType } from './types'

const CheckboxComponent = (
  {
    label,
    name,
    value,
    disabled = false,
    size = 'small',
    onChange,
    checked,
  }: PropsType,
  ref: Ref<HTMLInputElement>
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

export const Checkbox = forwardRef(CheckboxComponent)
