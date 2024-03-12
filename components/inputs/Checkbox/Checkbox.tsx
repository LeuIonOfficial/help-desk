import { FormControlLabel, Checkbox } from '@mui/material'
import { FC } from 'react'
import { PropsType } from './types'

const CustomCheckbox: FC<PropsType> = ({ label = '', register, name }) => (
  <FormControlLabel
    control={<Checkbox />}
    label={label}
    name={name}
    {...register}
  />
)

export default CustomCheckbox
