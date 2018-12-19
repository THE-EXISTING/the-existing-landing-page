import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'

const ProjectContainer = styled.div`
  text-align: center;
`

const ProjectOrder = styled.p`
  font-size: 3.2rem;
  margin: 7.2rem 0;

  span {
    color: #88dbde;
  }

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

const VerticleLineContainer = styled.span`
  padding: 0 2rem;
  font-size: 4.2rem;
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
  span {
    color: #f29100;
  }

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

const PlasmaChainDemo = styled.p`
  font-family: ProductSans-Bold;
  font-size: 6.4rem;
  letter-spacing: 1.5px;

  span {
    color: #5682e8;
  }

  ${media.lessThan('medium')`
  font-size: 3.2rem;
  `};
`

const PlasmaQuote = styled.div`
  font-size: 1.3rem;
  padding: 0 6.4rem;
`

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

const HorizontalLine = styled.hr`
  border: 1px solid #ffffff;
  opacity: 0.12;
  width: 560px;

  ${media.lessThan('medium')`
    font-size: 3.2rem;
    width: 280px;
  `};
`

function Project() {
  return (
    <Layout>
      <HeaderText>Project</HeaderText>
      <ProjectContainer>
        <ProjectOrder>
          <span>F</span>IRST PROJECT
        </ProjectOrder>
        <PlasmaChainDemo>
          <span>Plasma</span> Chain Demo
        </PlasmaChainDemo>
        <PlasmaQuote>
          We contribute a demo project on private repo in GitHub. For example, create, transfer and
          convert the tokens to Ethereum on Plasma Chain (The side chain that it is on Ethereum){' '}
          <br /> All of these is an open source project of OmiseGO.
        </PlasmaQuote>
        <BorderContainer>
          <div>
            <img src="/static/Icon/Omisego.svg" alt="" width="156px" height="48px" />
          </div>
        </BorderContainer>
        <HorizontalLine />
        <ProjectOrder>
          <span>S</span>ECOND PROJECT
        </ProjectOrder>
        <DcenText>
          <img src="/static/Logo/DCEN.svg" alt="" />
          <VerticleLineContainer>
            <VerticalLine />
          </VerticleLineContainer>
          <UnlockContainer>
            Unlock all your restrictions to <br /> <span>your first decentralized experience</span>{' '}
            <br /> with us, the last jigsaw you need.
          </UnlockContainer>
        </DcenText>
        <ImgOverview src="/static/image/dcen-overview.png" alt="" />
        <ProductComingSoon>Product is Coming soon... </ProductComingSoon>
      </ProjectContainer>
    </Layout>
  )
}

export default Project
