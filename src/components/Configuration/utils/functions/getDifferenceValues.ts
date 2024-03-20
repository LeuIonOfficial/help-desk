import { pickBy } from "lodash"

type StaticData = Record<string, string>

export const getDifferentValues = (
  updatedObject: StaticData,
  defaultObject: StaticData
) => pickBy(updatedObject, (value, key) => value !== defaultObject[key])
