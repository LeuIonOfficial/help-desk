import { pickBy } from 'lodash'

type StaticData = Record<string, string>

/**
 * Returns the key-value pairs from the `updatedObject` that have different values compared to the `defaultObject`.
 * @param updatedObject - The object containing the updated values.
 * @param defaultObject - The object containing the default values.
 * @returns An object containing the key-value pairs with different values.
 */
export const getDifferentValues = (
  updatedObject: StaticData,
  defaultObject: StaticData
) => pickBy(updatedObject, (value, key) => value !== defaultObject[key])
