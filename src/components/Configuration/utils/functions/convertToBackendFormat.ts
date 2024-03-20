import { mapValues } from 'lodash'

export const convertToBackendFormat = (
  data: Record<string, string | number | boolean>
): Record<string, string> => {
  return mapValues(data, (value, key) => {
    if (key === 'REFRESH_SECRET_TTL') {
      return `${value.toString()}d`
    }
    return value.toString()
  })
}
