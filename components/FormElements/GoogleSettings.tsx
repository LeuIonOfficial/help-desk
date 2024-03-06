import { FormControlLabel, Grid } from '@mui/material'
import CustomInput from '../CustomInput'
import { useFormContext } from 'react-hook-form'
import CustomCheckBox from '../CustomCheckBox'
import FormFieldHeader from './FormFieldHeader'

const GoogleSettings = () => {
    const { register, watch } = useFormContext()

    const googleOAUTH = watch('GOOGLE_OAUTH')

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <FormFieldHeader title="Google Settings" />
            </Grid>
            <Grid item xs={12}>
                <CustomCheckBox
                    register={register('GOOGLE_OAUTH')}
                    label="Enable Google OAUTH"
                    checked={googleOAUTH}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="OAUTH Google Client ID"
                    label="OAUTH Google Client ID"
                    register={register('OAUTH_GOOGLE_CLIENT_ID')}
                    inputProps={{ disabled: !googleOAUTH }}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="OAUTH Google Client Secret"
                    label="OAUTH Google Client Secret"
                    register={register('OAUTH_CLIENT_GOOGLE_SECRET')}
                    inputProps={{ disabled: !googleOAUTH }}
                />
            </Grid>
        </Grid>
    )
}

export default GoogleSettings
