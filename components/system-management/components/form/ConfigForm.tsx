'use client'
import { DevTool } from '@hookform/devtools'
import { useConfigForm } from '../../hooks/useConfigForm'

import * as S from './styled'
import { Button, Checkbox, OutlinedInput } from '@components'

export const ConfigForm = () => {
  const { watch, reset, register, handleSubmit, formState, control } =
    useConfigForm()
  const { OAUTH_GOOGLE_ENABLED, LDAP_ENABLED } = watch()
  const { isDirty, errors } = formState
  const {
    APP_URL,
    EMAIL_HOST,
    EMAIL_PORT,
    LDAP_BIND_DN,
    LDAP_URL,
    OAUTH_GOOGLE_CLIENT_ID,
    OAUTH_GOOGLE_CLIENT_SECRET,
    REFRESH_SECRET_TTL,
  } = errors

  return (
    <S.Form onSubmit={handleSubmit}>
      <OutlinedInput
        {...register('APP_URL')}
        errorMessage={APP_URL?.message}
        label="Application URL"
        fullWidth
      ></OutlinedInput>
      <S.Header>Authentication Security Settings</S.Header>
      <OutlinedInput
        {...register('JWT_SECRET_TTL')}
        label="JWT Secret TTL:"
        fullWidth
      ></OutlinedInput>
      <OutlinedInput
        {...register('REFRESH_SECRET_TTL', { valueAsNumber: true })}
        errorMessage={REFRESH_SECRET_TTL?.message}
        label="Refresh Secret TTL:"
        fullWidth
        type="number"
      ></OutlinedInput>
      <S.Header>Email Settings:</S.Header>
      <OutlinedInput
        {...register('EMAIL_HOST')}
        errorMessage={EMAIL_HOST?.message}
        label="Email host:"
        fullWidth
      ></OutlinedInput>
      <OutlinedInput
        {...register('EMAIL_PORT', { valueAsNumber: true })}
        label="Email Port:"
        errorMessage={EMAIL_PORT?.message}
        fullWidth
        type="number"
      ></OutlinedInput>
      <S.Header>Google Settings:</S.Header>
      <S.Header>
        <Checkbox
          {...register('OAUTH_GOOGLE_ENABLED')}
          label="Google Auth Enabled"
          checked={OAUTH_GOOGLE_ENABLED}
        />
      </S.Header>
      <OutlinedInput
        {...register('OAUTH_GOOGLE_CLIENT_ID')}
        errorMessage={OAUTH_GOOGLE_CLIENT_ID?.message}
        disabled={!OAUTH_GOOGLE_ENABLED}
        label="Google Client ID:"
        fullWidth
      />
      <OutlinedInput
        {...register('OAUTH_GOOGLE_CLIENT_SECRET')}
        errorMessage={OAUTH_GOOGLE_CLIENT_SECRET?.message}
        label="OAUTH Google Client Secret"
        disabled={!OAUTH_GOOGLE_ENABLED}
      />
      <S.Header>LDAP Settings:</S.Header>
      <S.Header>
        <Checkbox
          {...register('LDAP_ENABLED')}
          label="LDAP Enabled"
          checked={LDAP_ENABLED}
        />
      </S.Header>
      <OutlinedInput
        {...register('LDAP_URL')}
        errorMessage={LDAP_URL?.message}
        label="LDAP URL:"
        fullWidth
        disabled={!LDAP_ENABLED}
      />
      <OutlinedInput
        {...register('LDAP_BIND_DN')}
        errorMessage={LDAP_BIND_DN?.message}
        label="LDAP Bind DN:"
        fullWidth
        disabled={!LDAP_ENABLED}
      />
      <S.Footer gridColumn="1/3">
        <Button type="submit" disabled={!isDirty}>
          Save Changes
        </Button>
        <Button type="button" variant="outlined" onClick={() => reset()}>
          Reset
        </Button>
      </S.Footer>
      {process.env.NODE_ENV === 'development' && control && (
        <DevTool control={control} />
      )}
    </S.Form>
  )
}
