import { ConfigSchema } from '../../Form/validation'
import { useForm } from 'react-hook-form'
import { staticData } from '@mocks'
import { getInitialValues } from '../index'
import { useSubmitForm } from './useSubmitForm'
import { zodResolver } from '@hookform/resolvers/zod'

/**
 * Custom hook for managing the configuration form.
 *
 * @param data - The initial data used to initialize the form.
 * @returns An object containing the form methods and state from useForm.
 */
export const useConfigForm = (data: typeof staticData) => {
  const { reset, register, watch, handleSubmit, formState, ...rest } = useForm({
    mode: 'all',
    defaultValues: getInitialValues(data),
    resolver: zodResolver(ConfigSchema),
  })
  const { onSubmit } = useSubmitForm()

  return {
    reset,
    register,
    watch,
    handleSubmit: handleSubmit(onSubmit),
    formState,
    ...rest,
  }
}
