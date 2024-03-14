'use client'
import { FormLabel } from '@mui/material'
import { PropsType } from './types'
import * as S from './styled'
import { Ref, forwardRef } from 'react'

const Input = (
  {
    label,
    errorMessage,
    placeholder,
    fullWidth = false,
    gridRow,
    size = 'small',
    type = 'text',
    name,
    value,
    disabled,
    onChange,
    onBlur,
  }: PropsType,
  ref: Ref<HTMLInputElement>
) => (
  <S.FormControl fullWidth={fullWidth} $gridRow={gridRow}>
    {label && <FormLabel>{label}</FormLabel>}
    <S.OutlinedInput
      ref={ref}
      placeholder={placeholder}
      value={value}
      size={size}
      error={!!errorMessage}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
    {errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
  </S.FormControl>
)

export const OutlinedInput = forwardRef(Input)
