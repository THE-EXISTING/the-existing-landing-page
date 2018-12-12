import React from 'react'
import styled from 'styled-components'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'

const ProjectContainer = styled.div`
  text-align: center;
`

const FirtsProject = styled.p`
  font-size: 3.2rem;
  margin: 7.2rem 0;
`

const DcenText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductCommingSoon = styled.p`
  font-size: 3.2rem;
  opacity: 0.6;
`

function Vision() {
  return (
    <Layout>
      <HeaderText>Project</HeaderText>
      <ProjectContainer>
        <FirtsProject>
          <span style={{ color: '#88DBDE' }}>FIRST</span> PROJECT
        </FirtsProject>
        <DcenText>
          <img src="/static/Logo/DCEN.svg" alt="" />
          <span style={{ padding: '0 2rem', fontSize: '4.2rem' }}>|</span>
          <span style={{ textAlign: 'left' }}>
            Unlock all your restrictions to <br />{' '}
            <span style={{ color: '#F29100' }}>your first decentralized experience</span> <br />{' '}
            with us, the last jigsaw you need.
          </span>
        </DcenText>
        <img
          src="/static/image/dcen-overview.png"
          alt=""
          width="100%"
          style={{ margin: '10rem 0' }}
        />
        <ProductCommingSoon>Product is Comming soon... </ProductCommingSoon>
      </ProjectContainer>
    </Layout>
  )
}

export default Vision
