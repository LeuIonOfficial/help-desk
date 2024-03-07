import { FormControlLabel, Checkbox } from '@mui/material'
import { FC } from 'react'
import { PropsType } from './types'

const CustomCheckbox: FC<PropsType> = ({ label = '', register }) => (
    <FormControlLabel control={<Checkbox />} label={label} {...register} />
)

export default CustomCheckbox
