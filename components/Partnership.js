import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'

const PartnerShipContainer = styled.div`
  display: flex;
  text-align: left;
  ${media.lessThan('medium')`
    flex-direction: column;
    margin: 1.8rem 0 2.4rem 0;
  `};
`

const NextzyQuite = styled.p`
  font-size: 1.4rem;
  margin-left: 4.8rem;
  ${media.lessThan('medium')`
  margin-left: 0;
  `};
`

const ImgNextzy = styled.img`
  ${media.lessThan('medium')`
    margin: 1.8rem 0 2.4rem 0;
  `};
`

function Partnership() {
  return (
    <Layout>
      <HeaderText>Partnership</HeaderText>
      <PartnerShipContainer>
        <ImgNextzy src="/static/Logo/Nextzy.svg" alt="" />
        <NextzyQuite>
          Software development team occurs from a group of executive who have visions, experiences
          and specializations in universal level about software development more than 5 years,
          including be the software developer for large enterprises. The objectives are being the
          consultant of IT system, design, develops full-stack applications, software development
          training and develops systems for both state agencies and private organizations.
        </NextzyQuite>
      </PartnerShipContainer>
    </Layout>
  )
}

export default Partnership
