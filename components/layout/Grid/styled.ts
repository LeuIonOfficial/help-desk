import styled from '@emotion/styled'
import { StyledWrapperType } from './types'

const Wrapper = styled.div((props: StyledWrapperType) => ({
  width: '100%',
  display: 'grid',
  padding: props.padding,
  'grid-template-columns': props['grid-template-columns'],
  'grid-row-gap': props['grid-row-gap'],
  'column-gap': props['column-gap'],
}))

export default Wrapper
