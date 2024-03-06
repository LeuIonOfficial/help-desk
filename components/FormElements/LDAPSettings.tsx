import { FormControlLabel, Grid } from '@mui/material'
import CustomInput from '../CustomInput'
import { useFormContext } from 'react-hook-form'
import CustomCheckBox from '../CustomCheckBox'
import FormFieldHeader from './FormFieldHeader'

const LDAPSettings = () => {
    const { register, watch } = useFormContext()

    const LDAPSettings = watch('LDAP_SETTINGS')

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <FormFieldHeader title="LDAP Settings" />
            </Grid>
            <Grid item xs={12}>
                <CustomCheckBox
                    register={register('LDAP_SETTINGS')}
                    label="Enable LDAP"
                    checked={LDAPSettings}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="LDAP URL"
                    label="LDAP URL"
                    register={register('LDAP_URL')}
                    inputProps={{ disabled: !LDAPSettings }}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomInput
                    name="LDAP BIND DN"
                    label="LDAP BIND DN"
                    register={register('LDAP_BIND_DN')}
                    inputProps={{ disabled: !LDAPSettings }}
                />
            </Grid>
        </Grid>
    )
}

export default LDAPSettings
