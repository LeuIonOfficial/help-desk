'use client'
import useFormHook from '@hooks/useFormHook'

import * as S from './styled'
import { Button, Checkbox, OutlinedInput } from '@components'

export const Form = () => {
  const { watch, reset, register, handleSubmit } = useFormHook()
  const { OAUTH_GOOGLE_ENABLED, LDAP_ENABLED } = watch()

  return (
    <S.Form onSubmit={handleSubmit}>
      <OutlinedInput
        label="Application URL"
        fullWidth
        {...register('APP_URL')}
      ></OutlinedInput>
      <S.Header>Authentication Security Settings</S.Header>
      <OutlinedInput
        label="JWT Secret TTL:"
        fullWidth
        {...register('JWT_SECRET_TTL')}
      ></OutlinedInput>
      <OutlinedInput
        label="Refresh Secret TTL:"
        fullWidth
        {...register('REFRESH_SECRET_TTL')}
      ></OutlinedInput>
      <S.Header>Email Settings:</S.Header>
      <OutlinedInput
        label="Email host:"
        fullWidth
        {...register('EMAIL_HOST')}
      ></OutlinedInput>
      <OutlinedInput
        label="Email Port:"
        fullWidth
        type="number"
        {...register('EMAIL_PORT')}
      ></OutlinedInput>
      <S.Header>Google Settings:</S.Header>
      <S.Header>
        <Checkbox
          label="Google Auth Enabled"
          checked={OAUTH_GOOGLE_ENABLED}
          {...register('OAUTH_GOOGLE_ENABLED')}
        />
      </S.Header>
      <OutlinedInput
        label="Google Client ID:"
        fullWidth
        disabled={!OAUTH_GOOGLE_ENABLED}
        {...register('OAUTH_GOOGLE_CLIENT_ID')}
      />
      <OutlinedInput
        label="OAUTH Google Client Secret"
        disabled={!OAUTH_GOOGLE_ENABLED}
        {...register('OAUTH_GOOGLE_CLIENT_SECRET')}
      />
      <S.Header>LDAP Settings:</S.Header>
      <S.Header>
        <Checkbox
          label="LDAP Enabled"
          checked={LDAP_ENABLED}
          {...register('LDAP_ENABLED')}
        />
      </S.Header>
      <OutlinedInput
        label="LDAP URL:"
        fullWidth
        disabled={!LDAP_ENABLED}
        {...register('LDAP_URL')}
      />
      <OutlinedInput
        label="LDAP Bind DN:"
        fullWidth
        disabled={!LDAP_ENABLED}
        {...register('LDAP_BIND_DN')}
      />
      <S.Footer gridColumn="1/3">
        <Button type="submit">Save Changes</Button>
        <Button type="button" variant="outlined" onClick={() => reset()}>
          Reset
        </Button>
      </S.Footer>
    </S.Form>
  )
}
