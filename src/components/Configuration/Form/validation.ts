import { z } from 'zod'

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
