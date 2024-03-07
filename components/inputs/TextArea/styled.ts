import styled from '@emotion/styled'
import { StyledProps } from './types'

export const TextArea = styled.div(({ gridRow }: StyledProps) => ({
    'grid-row': gridRow,
}))
