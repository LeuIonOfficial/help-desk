import { Input, TextFieldVariants, styled } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export interface InputType {
    label?: string
    name?: string
    register?: {}
    inputProps?: {}
}

const CustomInput = (props: InputType) => {
    const { label, name, register, inputProps } = props

    return (
        <Container>
            {label ?? <Label>{label}</Label>}
            <Input {...register} {...inputProps} />
        </Container>
    )
}

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
})
const Label = styled('span')({})
const StyledInput = styled(Input)({})

export default CustomInput
