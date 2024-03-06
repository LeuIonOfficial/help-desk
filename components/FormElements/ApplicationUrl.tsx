import { Grid } from '@mui/material'
import CustomInput from '../CustomInput'
import { useFormContext } from 'react-hook-form'

const ApplicationUrl = () => {
    const { register } = useFormContext()
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <CustomInput
                    name="Application Url"
                    label="Application Url"
                    register={register('applicationUrl')}
                />
            </Grid>
        </Grid>
    )
}

export default ApplicationUrl
