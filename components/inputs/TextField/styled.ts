import {
  FormControl as MuiFormControl,
  TextField as MuiTextField,
  FormHelperText as MuiHelperText,
  textFieldClasses,
  OutlinedInput,
} from '@mui/material'
import styled from '@emotion/styled'
import { StyledProps } from './types'

export const FormControl = styled(MuiFormControl)(
  ({ gridRow }: StyledProps) => ({
    'grid-row': gridRow,
  })
)

export const TextField = styled(OutlinedInput)``

export const ErrorMsg = styled(MuiHelperText)((props: StyledProps) => ({}))
