import { Grid } from '@mui/material'
import CustomInput from '../CustomInput'
import { useFormContext } from 'react-hook-form'
import FormFieldHeader from './FormFieldHeader'

const EmailSettings = () => {
    const { register } = useFormContext()
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <FormFieldHeader title="Email Settings" />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="Email Host"
                    label="Email Host"
                    register={register('EMAIL_HOST')}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="Email Port"
                    label="Email Port"
                    register={register('EMAIL_PORT')}
                />
            </Grid>
        </Grid>
    )
}

export default EmailSettings
