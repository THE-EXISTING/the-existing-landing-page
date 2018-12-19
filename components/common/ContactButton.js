import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const Button = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  font-family: ProductSans-Regular;
  width: 10rem;
  height: 2.8rem;
  color: #ffffff;
  background-color: transparent;
  border-radius: 5px;
  border-width: 2px;
  letter-spacing: 1.5px;

  ${media.lessThan('medium')`
    display: none;
  `};
`

function ContactButton() {
  return (
    <Button
      onClick={() => {
        window.open('https://m.me/TheExistingCompany', '_blank')
      }}
    >
      CONTACT
    </Button>
  )
}

export default ContactButton
