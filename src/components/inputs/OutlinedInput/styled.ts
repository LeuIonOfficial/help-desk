import {
  FormControl as MuiFormControl,
  FormHelperText as MuiHelperText,
  outlinedInputClasses,
  OutlinedInput as MuiOutlinedInput,
} from '@mui/material'
import styled from '@emotion/styled'
import { StyledProps } from './types'

export const FormControl = styled(MuiFormControl, {shouldForwardProp: prop => !['$gridRow'].includes(prop)}
)(
  ({ $gridRow }: StyledProps) => ({
    'grid-row': $gridRow,
  })
)

export const OutlinedInput = styled(MuiOutlinedInput)(
  () => `
  &.${outlinedInputClasses.root} {
    background-color: white;
  }
`
)

export const ErrorMsg = styled(MuiHelperText)((props: StyledProps) => ({}))
