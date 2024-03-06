'use client'
import styled from '@emotion/styled'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return <Container>{children}</Container>
}

const Container = styled.div({
    height: '100vh',
    padding: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

export default PageLayout
