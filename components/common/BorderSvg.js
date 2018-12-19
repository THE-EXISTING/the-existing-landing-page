import React from 'react'
import styled from 'styled-components'

const BorderContainer = styled.div`
  cursor: pointer;
  background-image: url('../static/Icon/Border.svg');
  width: 230px;
  height: 84px;
  margin: 64px auto 84px auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

function BorderSvg({ children, width, height }) {
  return (
    <BorderContainer>
      <div>{children}</div>
    </BorderContainer>
  )
}

export default BorderSvg
