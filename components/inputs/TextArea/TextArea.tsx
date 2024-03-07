import { InputLabel, FormHelperText, TextField } from '@mui/material'
import { FC } from 'react'
import { PropsType } from './types'
import * as S from './styled'

const TextArea: FC<PropsType> = (props) => {
    const {
        label,
        register,
        helperText,
        placeholder,
        variant,
        fullWidth = false,
        gridRow,
        ...rest
    } = props
    return (
        <S.TextArea gridRow={gridRow}>
            {label && <InputLabel>{label}</InputLabel>}
            <TextField
                {...register}
                placeholder={placeholder}
                variant={variant}
                fullWidth={fullWidth}
                {...rest}
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </S.TextArea>
    )
}

export default TextArea
