'use client'
import { FormProvider } from 'react-hook-form'

import useFormHook from '@/hooks/useFormHook'
import { Grid } from '../layout/Grid'
import { TextArea } from '../inputs/TextArea'

import * as S from './styled'

const Form = () => {
  const { methods, onSubmit } = useFormHook()
  const { handleSubmit, register } = methods

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          column-gap="10px"
          grid-row-gap="10px"
          grid-template-columns="repeat(2, 1fr)"
          padding="10px 20px"
        >
          <TextArea
            gridRow="2"
            label="Application URL"
            helperText="Hello"
            inputId=""
            fullWidth
            register={register('applicationUrl')}
          ></TextArea>
          <S.Heading gridRow="3">Application URL</S.Heading>
          <TextArea
            gridRow="4"
            label="Application URL"
            helperText="Hello"
            inputId=""
            fullWidth
          ></TextArea>
          <TextArea
            gridRow="4"
            label="Application URL"
            helperText="Hello"
            inputId=""
            fullWidth
          ></TextArea>
        </Grid>
      </S.Form>
    </FormProvider>
  )
}

export default Form
