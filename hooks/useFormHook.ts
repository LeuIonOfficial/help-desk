import { useForm } from 'react-hook-form'
import { staticData } from '@mock'

type ObjectType = Record<string, string | boolean>

const getInitialValues = ({
  OAUTH_GOOGLE_ENABLED,
  LDAP_ENABLED,
  ...rest
}: typeof staticData) => {
  return {
    ...rest,
    OAUTH_GOOGLE_ENABLED: OAUTH_GOOGLE_ENABLED === 'true',
    LDAP_ENABLED: LDAP_ENABLED === 'true',
  }
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
  const { reset, register, watch, handleSubmit } = useForm({
    defaultValues: getInitialValues(staticData),
  })
  const onSubmit = (data: Record<string, string | boolean>) => {
    const result = getDiffValues(
      {
        ...data,
        OAUTH_GOOGLE_ENABLED: data.OAUTH_GOOGLE_ENABLED.toString(),
        LDAP_ENABLED: data.LDAP_ENABLED.toString(),
      },
      staticData
    )
    console.log(result)
  }

  return { reset, register, watch, handleSubmit: handleSubmit(onSubmit) }
}

export default useFormHook
