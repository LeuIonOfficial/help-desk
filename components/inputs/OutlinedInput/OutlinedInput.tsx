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
  register,
  type = 'text',
  onChange,
}: PropsType) => (
  <S.FormControl fullWidth={fullWidth} gridRow={gridRow}>
    {label && <FormLabel>{label}</FormLabel>}
    <S.OutlinedInput
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      error={!!errorMsg}
      type={type}
      {...register}
    />
    {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
  </S.FormControl>
)

export default OutlinedInput
