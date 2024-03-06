'use client'

import { TextField, TextFieldVariants } from '@mui/material'
import { FC } from 'react'

type PropsType = {
    name: string
    variant: TextFieldVariants
    register: {}
}

const Input: FC<PropsType> = (props) => {
    const { name, variant = 'outlined', register } = props
    return (
        <TextField
            id="outlined-basic"
            label={name}
            fullWidth
            variant={variant}
            {...register}
        />
    )
}

export default Input
