import { staticData } from '@mock'
import { convertToBackendFormat, getDifferentValues } from '../utils'

export const useSubmitForm = () => {
  const onSubmit = (data: Record<string, string | boolean | number>) => {
    const convertedData = convertToBackendFormat(data)
    const differentValues = getDifferentValues(convertedData, staticData)

    // Temporary soltuions for showing changed values
    // Here must be a reguest to backend
    if (Object.values(differentValues).length === 0) {
      alert('No changes detected')
    } else {
      alert('Changes detected \n' + JSON.stringify(differentValues))
    }
  }
  return { onSubmit }
}
