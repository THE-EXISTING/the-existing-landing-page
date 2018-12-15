import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'

const ProjectContainer = styled.div`
  text-align: center;
`

const FirtsProject = styled.p`
  font-size: 3.2rem;
  margin: 7.2rem 0;

  ${media.lessThan('medium')`
    font-size: 2.4rem;
    margin: 5.4rem 0;
    text-align: left;
  `};
`

const DcenText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`

const ProductComingSoon = styled.p`
  font-size: 3.2rem;
  opacity: 0.6;

  ${media.lessThan('medium')`
    font-size: 2rem;
  `};
`

const VerticalLine = styled.hr`
  transform: rotate(90deg);
  width: 32px;
  height: 2px;
  background-color: #ffffff;
  border: 0;

  ${media.lessThan('medium')`
    display: none;
  `};
`

const UnlockContainer = styled.span`
  text-align: left;
  ${media.lessThan('medium')`
    text-align: center;
    font-size: 1.2rem;
    margin: 1.6rem 0 3.6rem 0;
  `};
`

const ImgOverview = styled.img`
  width: 100%;
  margin: 10rem 0 8.4rem 0;
  ${media.lessThan('medium')`
    margin: 0 0 3rem 0;
  `};
`

function Project() {
  return (
    <Layout>
      <HeaderText>Project</HeaderText>
      <ProjectContainer>
        <FirtsProject>
          <span style={{ color: '#88DBDE' }}>FIRST</span> PROJECT
        </FirtsProject>
        <DcenText>
          <img src="/static/Logo/DCEN.svg" alt="" />
          <span style={{ padding: '0 2rem', fontSize: '4.2rem' }}>
            <VerticalLine />
          </span>
          <UnlockContainer>
            Unlock all your restrictions to <br />{' '}
            <span style={{ color: '#F29100' }}>your first decentralized experience</span> <br />{' '}
            with us, the last jigsaw you need.
          </UnlockContainer>
        </DcenText>
        <ImgOverview src="/static/image/dcen-overview.png" alt="" />
        <ProductComingSoon>Product is Coming soon... </ProductComingSoon>
      </ProjectContainer>
    </Layout>
  )
}

export default Project
