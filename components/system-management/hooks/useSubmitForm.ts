import { staticData } from "@mock"
import { getDiffValues } from "../utils"

export const useSubmitForm = () => {
    const onSubmit = (data: Record<string, string | boolean | number>) => {
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

      return {onSubmit}
}