import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'

const VisionContainer = styled.div`
  ${media.lessThan('medium')`
    font-size: 1.4rem;
  `};
`

function Vision() {
  return (
    <Layout color="black" type="vision">
      <VisionContainer>
        <HeaderText>Vision</HeaderText>
        <p>
          " We believe that technologies are the key for people’s better life We have established an
          Existing Company for creating the challenging and very tough projects that will be the
          most beneficial to our users. "
        </p>
        <p style={{ textAlign: 'right' }}>- Commander team -</p>
      </VisionContainer>
    </Layout>
  )
}

export default Vision
