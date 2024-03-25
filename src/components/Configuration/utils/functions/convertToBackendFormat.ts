import { mapValues } from 'lodash'

/**
 * Converts the given data object to a backend format.
 * @param data - The data object to be converted.
 * @returns The converted data object in backend format.
 */
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
