import { staticData } from '@mock'
import { mapValues } from 'lodash'
import { z } from 'zod'

type ObjectType = Record<string, string | boolean | number>

export const getInitialValues = (data: typeof staticData) => {
  return {
    ...data,
    EMAIL_PORT: +data.EMAIL_PORT,
    REFRESH_SECRET_TTL: +data.REFRESH_SECRET_TTL.split('d')[0],
    OAUTH_GOOGLE_ENABLED: data.OAUTH_GOOGLE_ENABLED === 'true',
    LDAP_ENABLED: data.LDAP_ENABLED === 'true',
  }
}

export const getDifferentValues = (
  updatedObject: ObjectType,
  defaultObject: ObjectType
) => {
  const values = {} as ObjectType
  mapValues(updatedObject, (value, key) => {
    if (value === defaultObject[key]) return
    values[key] = value
  })
  return values
}

export const convertToBackendFormat = (data: ObjectType) => {
  return mapValues(data, (value, key) => {
    if (key === 'REFRESH_SECRET_TTL') {
      return `${value.toString()}d`
    }
    return value.toString()
  })
}

export const ConfigSchema = z.object({
  APP_URL: z.string().url(),
  OAUTH_GOOGLE_ENABLED: z.boolean(),
  OAUTH_GOOGLE_CLIENT_ID: z.string(),
  OAUTH_GOOGLE_CLIENT_SECRET: z.string(),
  JWT_SECRET: z.string(),
  JWT_SECRET_TTL: z.string(),
  REFRESH_SECRET: z.string(),
  REFRESH_SECRET_TTL: z.number().max(365).min(1),
  HASH_SECRET: z.string(),
  LDAP_ENABLED: z.boolean(),
  LDAP_URL: z.string(),
  LDAP_BIND_DN: z.string(),
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.number(),
})
