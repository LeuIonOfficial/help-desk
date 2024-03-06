'use client'
import { Button, styled } from '@mui/material'
import { FormProvider, useFormContext } from 'react-hook-form'

import ApplicationUrl from './FormElements/ApplicationUrl'
import AuthSecuritySettings from './FormElements/AuthSecuritySettings'
import EmailSettings from './FormElements/EmailSettings'
import GoogleSettings from './FormElements/GoogleSettings'
import LDAPSettings from './FormElements/LDAPSettings'

import useFormHook from '@/hooks/useFormHook'

const StyledFooter = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: '20px',
})

const StyledForm = styled('form')({
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
})

const SubmitButton = styled(Button)({
    width: '200px',
})

const Footer = () => {
    const { reset } = useFormContext()

    return (
        <StyledFooter>
            <SubmitButton type="submit" variant="contained">
                Submit
            </SubmitButton>
            <SubmitButton
                onClick={() => {
                    reset()
                }}
            >
                Reset
            </SubmitButton>
        </StyledFooter>
    )
}

const Form = () => {
    const { methods, onSubmit } = useFormHook()
    const { handleSubmit } = methods

    return (
        <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <ApplicationUrl />
                <AuthSecuritySettings />
                <EmailSettings />
                <GoogleSettings />
                <LDAPSettings />
                <Footer />
            </StyledForm>
        </FormProvider>
    )
}

export default Form
