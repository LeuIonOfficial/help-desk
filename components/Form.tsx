'use client'
import { Button, Grid, TextField, styled } from '@mui/material'
import { useForm } from 'react-hook-form'
import Input from './Input'

const Form = () => {
    const { handleSubmit, register } = useForm()
    const onSubmit = (data: Record<string, string>) => console.log(data)
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6}>
                    <Input
                        name="First Name"
                        register={register('firstName')}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        name="Last Name"
                        register={register('lastName')}
                        variant="outlined"
                    />
                </Grid>
                <Footer>
                    <SubmitButton type="submit" variant="contained">
                        Submit
                    </SubmitButton>
                </Footer>
            </Grid>
        </StyledForm>
    )
}

const Footer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: '20px',
})

const StyledForm = styled('form')({
    width: '100%',
    marginTop: '20px',
})

const SubmitButton = styled(Button)({
    width: '400px',
})

export default Form
