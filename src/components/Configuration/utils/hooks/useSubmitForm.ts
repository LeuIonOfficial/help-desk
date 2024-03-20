import { staticData } from '@mocks'
import { convertToBackendFormat, getDifferentValues } from '../index'
import { useUpdateData } from './useUpdateData'

export const useSubmitForm = () => {
  const { updateData } = useUpdateData()
  const onSubmit = (data: Record<string, string | boolean | number>) => {
    const convertedData = convertToBackendFormat(data)
    const differentValues = getDifferentValues(convertedData, staticData)

    // Temporary soltuions for showing changed values
    // Here must be a reguest to backend
    if (Object.values(differentValues).length === 0) {
      alert('No changes detected')
    } else {
      updateData(JSON.stringify(differentValues))
    }
  }
  return { onSubmit }
}
