import { useForm } from 'react-hook-form'
import { mockData } from '@/mock'

type ObjectType = Record<string, string | boolean>

const getInitialValues = (object: {}) => {
  return Object.keys(object).reduce((acc, key) => {
    const value = object[key]
    if (value === 'true' || value === 'false') {
      acc[key] = value === 'true'
    } else {
      acc[key] = value
    }
    return acc
  }, {})
}

const getDiffValues = (obj1: ObjectType, obj2: ObjectType) => {
  return Object.keys(obj2).reduce((diff, key) => {
    if (obj1[key] === obj2[key]) return diff
    return {
      ...diff,
      [key]: obj1[key],
    }
  }, {})
}

const useFormHook = () => {
  const methods = useForm({
    defaultValues: getInitialValues(mockData),
  })
  const onSubmit = (data: Record<string, string | boolean>) => {
    const result = getDiffValues(
      {
        ...data,
        OAUTH_GOOGLE_ENABLED: data.OAUTH_GOOGLE_ENABLED.toString(),
        LDAP_ENABLED: data.LDAP_ENABLED.toString(),
      },
      mockData
    )
    console.log(result)
  }

  return { methods, onSubmit }
}

export default useFormHook
