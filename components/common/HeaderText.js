import React from 'react'
import styled from 'styled-components'

const Header = styled.p`
  display: inline-block;
  font-size: 2.4rem;
  padding-bottom: 4.5px;

  &:after {
    content: '';
    height: 4px;
    background: -moz-linear-gradient(left, #ffffff 0%, #adc4c8 100%);
    background: -webkit-linear-gradient(left, #ffffff 0%, #adc4c8 100%);
    background: linear-gradient(left, #ffffff 0%, #adc4c8 100%);
    width: 3.2rem;
    display: block;
    margin-top: 8px;
  }
`

function HeaderText(props) {
  return <Header>{props.children}</Header>
}

export default HeaderText
