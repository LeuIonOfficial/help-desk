import { ConfigSchema } from './../utils/index';
import { useForm } from 'react-hook-form'
import { staticData } from '@mock'
import { getInitialValues } from '../utils'
import { useSubmitForm } from './useSubmitForm'
import { zodResolver } from '@hookform/resolvers/zod';

export const useConfigForm = () => {
  const { reset, register, watch, handleSubmit, formState: {errors} } = useForm({
    defaultValues: getInitialValues(staticData),
    resolver: zodResolver(ConfigSchema)
  })
  const { onSubmit } = useSubmitForm()

  return { reset, register, watch, handleSubmit: handleSubmit(onSubmit), errors }
}


