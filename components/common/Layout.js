import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  text-align: left;
  /* padding: 5rem; */
  padding: 9rem 5rem 10.2rem 5rem;
  font-size: 1.8rem;
  overflow: hidden;
`

const TextContainer = styled.div`
  max-width: 884px;
  margin: 0 auto;
`

function Layout({ children, color }) {
  return (
    <Container style={{ backgroundColor: color === 'black' ? '#1F1F1F' : '#242424' }}>
      <TextContainer>{children}</TextContainer>
    </Container>
  )
}

export default Layout
