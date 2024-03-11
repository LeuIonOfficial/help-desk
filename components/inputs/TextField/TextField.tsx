import { FormLabel } from '@mui/material'
import { PropsType } from './types'
import * as S from './styled'
import { forwardRef } from 'react'

const TextField = forwardRef(
  (
    {
      label,
      errorMsg = '',
      placeholder = '',
      fullWidth = false,
      gridRow,
      size,
      register,
      type,
      onChange,
    }: PropsType,
    ref
  ) => (
    <S.FormControl fullWidth={fullWidth} gridRow={gridRow}>
      {label && <FormLabel>{label}</FormLabel>}
      <S.TextField
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        error={!!errorMsg}
        ref={ref}
        type={type}
        {...register}
      />
      {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
    </S.FormControl>
  )
)

export default TextField
