import React from 'react'
import styled from 'styled-components'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'

const PartnerShipContainer = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 5rem;
`

const NextzyQuite = styled.p`
  font-size: 1.4rem;
  margin-left: 4.8rem;
`

function Partnership() {
  return (
    <Layout>
      <HeaderText>Partnership</HeaderText>
      <PartnerShipContainer>
        <img src="/static/Logo/Nextzy.svg" alt="" />
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
