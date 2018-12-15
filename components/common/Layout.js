import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Container = styled.div`
  position: relative;
  text-align: left;
  padding: 9rem 5rem 10.2rem 5rem;
  font-size: 1.8rem;
  overflow: hidden;

  ${media.lessThan('medium')`
    font-size: 2rem;
    padding: 4.2rem 2rem 5.4rem 2rem;
    padding ${({ type }) =>
      type === 'vision' ? '1.8rem 2rem 2.2rem 2rem' : '4.2rem 2rem 5.4rem 2rem'}

  `};
`

const TextContainer = styled.div`
  max-width: 884px;
  margin: 0 auto;
`

function Layout({ children, color, type }) {
  return (
    <Container style={{ backgroundColor: color === 'black' ? '#1F1F1F' : '#242424' }} type={type}>
      <TextContainer>{children}</TextContainer>
    </Container>
  )
}

export default Layout
