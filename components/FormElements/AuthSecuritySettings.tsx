import { Grid } from '@mui/material'
import CustomInput from '../CustomInput'
import { useFormContext } from 'react-hook-form'
import FormFieldHeader from './FormFieldHeader'

const AuthSecuritySettings = () => {
    const { register } = useFormContext()
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <FormFieldHeader title="Authentication Security Settings" />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="JWT Secret TTL"
                    label="JWT Secret TTL:"
                    register={register('JWT_SECRET_TTL')}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="Refresh Secret TTL"
                    label="Refresh Secret TTL (days):"
                    register={register('REFRESH_SECRET_TTL')}
                />
            </Grid>
        </Grid>
    )
}

export default AuthSecuritySettings
