import styled from '@emotion/styled'
import { StylesType } from './types'

export const Form = styled.form`
  width: 100%;
`
export const Heading = styled('span')((props: StylesType) => ({
  gridRow: props.gridRow,
}))
