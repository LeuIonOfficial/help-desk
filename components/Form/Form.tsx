'use client'
import useFormHook from '@/hooks/useFormHook'

import * as S from './styled'
import { Grid } from '@/components/layout'
import { OutlinedInput } from '@/components/inputs'

const Form = () => {
  const { methods, onSubmit } = useFormHook()
  const { handleSubmit, register } = methods

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        padding="10px 20px"
        gridTemplateColumns="repeat(2, 1fr)"
        gridRowGap="10px"
        columnGap="10px"
      >
        <OutlinedInput
          gridRow="1"
          label="Application URL"
          fullWidth
          register={register('applicationUrl')}
        ></OutlinedInput>
        <S.Heading gridRow="2">Authentication Security Settings</S.Heading>
        <OutlinedInput
          gridRow="3"
          label="JWT Secret TTL:"
          fullWidth
          register={register('JWT_SECRET_TTL')}
        ></OutlinedInput>
        <OutlinedInput
          gridRow="3"
          label="Refresh Secret TTL:"
          fullWidth
          register={register('REFRESH_SECRET_TTL')}
        ></OutlinedInput>
        <S.Heading gridRow="4">Email Settings:</S.Heading>
        <OutlinedInput
          gridRow="5"
          label="Email host:"
          fullWidth
          register={register('EMAIL_HOST')}
        ></OutlinedInput>
        <OutlinedInput
          gridRow="5"
          label="Email Port:"
          fullWidth
          register={register('EMAIL_PORT')}
        ></OutlinedInput>
      </Grid>
    </S.Form>
  )
}

export default Form
