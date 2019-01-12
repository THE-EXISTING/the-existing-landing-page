import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { scroller } from 'react-scroll'

const HomeContainer = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  min-height: 100vh;
`

const StarBGImg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  overflow: hidden;
  background-image: url('../static/image/star_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.3;

  ${media.lessThan('medium')`
    opacity: 0.9;
  `};
`

const WorldBGImg = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 68vh;
  margin: 0 auto;
  opacity: 0.3;
  animation: Rotating 1240s linear infinite;

  @keyframes Rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

const ExistingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 600px;
`

const ExistingText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;

  span {
    font-size: 2.4rem;
  }

  ${media.lessThan('medium')`
    flex-direction: column;

    span {
      font-size: 2rem;
      margin: 1.2rem 0;
    }
  `};
`

const ImgOverlay = styled.img`
  position: absolute;
  width: 140%;

  ${media.lessThan('medium')`
    display: none;
  `};
`

const ButtonContainer = styled.div`
  position: relative;
  margin-top: 10rem;
  z-index: 1;

  ${media.lessThan('medium')`
    margin-top: 4.8rem;
  `};
`

const ContactButtonSvg = styled.div`
  mask-image: url('../static/Icon/Button.svg');
  background-image: linear-gradient(141deg, #ffffff 0%, #a5bdc2 100%);
  width: 200px;
  height: 48px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(141deg, #ffffff 0%, #ffffff 100%);
  }
`

const ContactText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: ProductSans-Regular;
  letter-spacing: 3px;
  color: #ffffff;
  z-index: -1;
`

const ScrollDownContainer = styled.div`
  position: absolute;
  bottom: 3.2rem;
  cursor: pointer;
  z-index: 2;
  animation: MoveUpDown 0.5s infinite alternate;
  opacity: 0.6;

  @keyframes MoveUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`

const Flare = styled.div`
  position: absolute;
  left: -350px;
  top: -220px;
  opacity: 0.7;
  background-image: radial-gradient(rgba(136, 156, 222, 0.1), transparent 70%);
  width: 1000px;
  height: 500px;

  ${media.lessThan('medium')`
    display: none;
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

const ExistingLogo = styled.img`
  margin-left: 31.27px;

  ${media.lessThan('medium')`
    margin-left: 0;
  `};
`

const ExistingQuote = styled.span`
  text-align: left;
  line-height: 1.2;

  ${media.lessThan('medium')`
    text-align: center;
  `};
`

class Home extends Component {
  state = {
    isMobile: false
  }

  componentDidMount() {
    this.handleCheckWindowSize()
    window.addEventListener('resize', this.handleCheckWindowSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleCheckWindowSize)
  }

  handleCheckWindowSize = () => {
    if (window.innerWidth < 768 && !this.state.isMobile) {
      this.setState({ isMobile: true })
    }
  }

  onHandleScrollTo = to => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuad',
      offset: this.state.isMobile ? -115 : -60
    })
  }

  render() {
    return (
      <HomeContainer>
        <StarBGImg />
        <ExistingContainer>
          <ExistingText>
            <ImgOverlay src="/static/Logo/EX_overlay.svg" alt="" />
            <div>
              <Flare />
              <ExistingLogo src="/static/Logo/Existing_color.svg" alt="" />
            </div>
            <span style={{ padding: '0 2rem' }}>
              <VerticalLine />
            </span>
            <ExistingQuote>
              make it <span style={{ color: '#88DBDE' }}>existing</span> by <br />
              <span style={{ color: '#88DBDE' }}>exiting</span> the limitations
            </ExistingQuote>
          </ExistingText>
          <ButtonContainer
            onClick={() => {
              window.open('https://m.me/TheExistingCompany', '_blank')
            }}
          >
            <ContactButtonSvg />
            <ContactText>CONTACT</ContactText>
          </ButtonContainer>
          <ScrollDownContainer>
            <div onClick={() => this.onHandleScrollTo('vision')}>
              <img src="/static/Icon/Scroll_down.svg" alt="" height="48" width="48" />
            </div>
          </ScrollDownContainer>
        </ExistingContainer>
        <WorldBGImg src="/static/image/planet_compress.png" />
      </HomeContainer>
    )
  }
}

export default Home
