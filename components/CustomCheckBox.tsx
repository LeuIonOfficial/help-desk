import { Checkbox, styled } from '@mui/material'

type PropsType = {
    register: {}
    label?: string
    checked?: boolean
}

const CustomCheckBox = ({ register, label, checked }: PropsType) => {
    return (
        <Container>
            <StyledCheckBox {...register} size="medium" checked={checked} />
            {label ?? <Label>{label}</Label>}
        </Container>
    )
}

const Container = styled('div')({
    display: 'flex',
    alignItems: 'end',
})

const StyledCheckBox = styled(Checkbox)({
    margin: 0,
    padding: 0,
    height: '100%',
})

const Label = styled('span')({})

export default CustomCheckBox
