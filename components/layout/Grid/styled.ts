import styled from '@emotion/styled'
import { StyledWrapperType } from './types'

const Wrapper = styled.div((props: StyledWrapperType) => ({
  width: '100%',
  display: 'grid',
  padding: props.padding,
  'grid-template-columns': props.gridTemplateColumns,
  'grid-row-gap': props.gridRowGap,
  'column-gap': props.columnGap,
}))

export default Wrapper
