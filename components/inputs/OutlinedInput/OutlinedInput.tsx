import { FormLabel } from '@mui/material'
import { PropsType } from './types'
import * as S from './styled'

const OutlinedInput = ({
  label,
  errorMsg,
  placeholder,
  fullWidth = false,
  gridRow,
  size = 'small',
  type = 'text',
  name = '',
  onChange,
  onBlur,
  ...props
}: PropsType) => {
  return (
    <S.FormControl fullWidth={fullWidth} gridRow={gridRow}>
      {label && <FormLabel>{label}</FormLabel>}
      <S.OutlinedInput
        placeholder={placeholder}
        size={size}
        error={!!errorMsg}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
    </S.FormControl>
  )
}

export default OutlinedInput
