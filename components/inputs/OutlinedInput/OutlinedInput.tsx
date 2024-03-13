import { FormLabel } from '@mui/material'
import { PropsType } from './types'
import * as S from './styled'

export const OutlinedInput = ({
  label = '',
  errorMessage = '',
  placeholder = '',
  fullWidth = false,
  gridRow,
  size = 'small',
  type = 'text',
  name = '',
  onChange,
  onBlur,
}: PropsType) => {
  return (
    <S.FormControl fullWidth={fullWidth} gridRow={gridRow}>
      {label && <FormLabel>{label}</FormLabel>}
      <S.OutlinedInput
        placeholder={placeholder}
        size={size}
        error={!!errorMessage}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
    </S.FormControl>
  )
}
