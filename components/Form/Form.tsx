'use client'
import useFormHook from '@/hooks/useFormHook'
import { Grid } from '../layout/Grid'
import { TextArea } from '../inputs/TextArea'

import * as S from './styled'

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
        <TextArea
          gridRow="1"
          label="Application URL"
          inputId=""
          fullWidth
          register={register('applicationUrl')}
        ></TextArea>
        <S.Heading gridRow="2">Authentication Security Settings</S.Heading>
        <TextArea
          gridRow="3"
          label="JWT Secret TTL:"
          inputId=""
          fullWidth
          register={register('JWT_SECRET_TTL')}
        ></TextArea>
        <TextArea
          gridRow="3"
          label="Refresh Secret TTL:"
          inputId=""
          fullWidth
          register={register('REFRESH_SECRET_TTL')}
        ></TextArea>
        <S.Heading gridRow="4">Email Settings:</S.Heading>
        <TextArea
          gridRow="5"
          label="Email host:"
          inputId=""
          fullWidth
          register={register('EMAIL_HOST')}
        ></TextArea>
        <TextArea
          gridRow="5"
          label="Email Port:"
          inputId=""
          fullWidth
          register={register('EMAIL_PORT')}
        ></TextArea>
      </Grid>
    </S.Form>
  )
}

export default Form
