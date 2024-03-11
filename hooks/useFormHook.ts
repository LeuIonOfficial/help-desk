import { BackEndData } from '@/mock'
import { useForm } from 'react-hook-form'

type ObjectType = Record<string, string | boolean>

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
        defaultValues: {
            ...BackEndData,
            GOOGLE_OAUTH: (BackEndData.GOOGLE_OAUTH === 'true'),
            LDAP_SETTINGS: !(BackEndData.LDAP_SETTINGS === 'false'),
        },
    })
    const onSubmit = (data: Record<string, string | boolean>) =>
        console.log(
            getDiffValues(
                {
                    ...data,
                    GOOGLE_OAUTH: data.GOOGLE_OAUTH.toString(),
                    LDAP_SETTINGS: data.LDAP_SETTINGS.toString(),
                },
                BackEndData
            )
        )

    return { methods, onSubmit }
}

export default useFormHook
