import { BaseTextFieldProps } from '@mui/material'

export interface PropsType extends BaseTextFieldProps, StyledProps {
    label: string
    register?: {}
    helperText: string
    inputId: string
}

export interface StyledProps {
    gridRow?: string
}
