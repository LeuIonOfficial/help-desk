import { staticData } from '@mock'
import { convertToBackendFormat, getDifferentValues, getInitialValues } from '.'

describe('Utils', () => {
  it('should return different type for default values', () => {
    const result = getInitialValues(staticData)
    expect(result).toEqual({
      ...staticData,
      EMAIL_PORT: 1025,
      REFRESH_SECRET_TTL: 17,
      OAUTH_GOOGLE_ENABLED: true,
      LDAP_ENABLED: false,
    })
  })
  it('should return empty object of difference values', () => {
    const mockData = { ...staticData }
    const result = getDifferentValues(mockData, staticData)
    expect(result).toEqual({})
  })
  it('should return key with difference values', () => {
    const mockData = { ...staticData, EMAIL_PORT: '1026' }
    const result = getDifferentValues(mockData, staticData)
    expect(result).toEqual({ EMAIL_PORT: '1026' })
  })
  it('should convert to backend type format', () => {
    const mockData = { ...staticData, EMAIL_PORT: 1025, REFRESH_SECRET_TTL: 17 }
    const result = convertToBackendFormat(mockData)
    expect(result).toEqual(staticData)
  })
})
