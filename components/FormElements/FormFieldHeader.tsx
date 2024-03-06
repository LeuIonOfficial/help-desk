import styled from '@emotion/styled'

type PropsType = {
    title: string
}

export default function FormFieldHeader(props: PropsType) {
    const { title } = props
    return <Title>{title}</Title>
}

const Title = styled('span')({})
