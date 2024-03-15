import { staticData } from '@mock'
import { getDiffValues } from '../utils'
import { mapValues } from 'lodash'

export const useSubmitForm = () => {
  const onSubmit = (data: Record<string, string | boolean | number>) => {
    const convertedData = mapValues(data, (value) => value.toString())

    const result = getDiffValues(convertedData, staticData)
    console.log(result)
  }
  return { onSubmit }
}
