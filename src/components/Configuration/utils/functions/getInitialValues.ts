import { staticData } from '@mocks'

/**
 * Retrieves the initial values for the configuration data.
 *
 * @param data - The configuration data object.
 * @returns The initial values object with the configuration data.
 */
export const getInitialValues = (data: typeof staticData) => {
  return {
    ...data,
    EMAIL_PORT: +data.EMAIL_PORT,
    REFRESH_SECRET_TTL: +data.REFRESH_SECRET_TTL?.split('d')[0],
    OAUTH_GOOGLE_ENABLED: data.OAUTH_GOOGLE_ENABLED === 'true',
    LDAP_ENABLED: data.LDAP_ENABLED === 'true',
  }
}
