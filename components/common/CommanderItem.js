import React, { Component } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const CommanderItemContainer = styled.div`
  position: relative;
  width: 24rem;
  box-sizing: border-box;
  padding: 2rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s;
  will-change: transition;
  z-index: 2;

  ${media.lessThan('medium')`
    margin: 5px auto;
    height: 443px;
  `};

  &:hover {
    box-shadow: 0 0 0 2px #d8d8d8;
    border-radius: 4px;
  }
`

const TeamImg = styled.img`
  width: 132px;
  height: 134px;
  border-radius: 50%;
  border: 4px solid white;
  margin: auto;
  transition: all 0.3s;
  filter: ${props => (props.isHover ? '' : 'grayscale(50%)')};

  ${media.lessThan('medium')`
    filter: ${props => (props.activeSlide ? 'grayscale(0%)' : 'grayscale(50%)')};
  `};
`

const FontAvenirContainer = styled.div`
  font-family: ProductSans-Bold;
  letter-spacing: 1px;
`

const ImgOverlay = styled.img`
  position: absolute;
  width: 200px;
  right: -100px;
  bottom: 0;
  opacity: 0.02;
`

const ImgOverlayMobile = styled(ImgOverlay)`
  display: none;

  ${media.lessThan('medium')`
    display: block;
  `};
`

const SocialContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1rem;
  z-index: 2;
`

const ImgSocial = styled.img`
  margin: 0.5rem;
  opacity: 0.34;
  cursor: pointer;
  transition: all 0.3s;
  will-change: transition;

  &:hover {
    opacity: 1;
  }
`
class CommanderItem extends Component {
  state = {
    isHover: false
  }

  handleOnMouseHover = () => {
    this.setState({
      isHover: true
    })
  }

  handleOnMouseLeave = () => {
    this.setState({
      isHover: false
    })
  }

  openNewTab = url => {
    console.log('url: ', url)
    window.open(url, '_blank')
  }

  renderIcon = index => {
    if (index === 0) {
      return '/static/Icon/Facebook.svg'
    } else if (index === 1) {
      return '/static/Icon/LinkedIn.svg'
    } else if (index === 2) {
      return '/static/Icon/Github.svg'
    }
  }

  render() {
    const { img, nickname, name, position, social, activeSlide } = this.props
    const { isHover } = this.state

    return (
      <CommanderItemContainer
        className="active-border"
        onMouseOver={this.handleOnMouseHover}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div>
          <TeamImg src={img} isHover={isHover} activeSlide={activeSlide} />
          <FontAvenirContainer>
            <p style={{ fontSize: '1.6rem', marginBottom: '0' }}>{nickname}</p>
            <p style={{ fontSize: '1.4rem', marginTop: '2px', fontFamily: 'ProductSans-Regular' }}>
              {name}
            </p>
            <p style={{ fontSize: '1.6rem', letterSpacing: '1.5px' }}>Co-founder</p>
          </FontAvenirContainer>

          <p style={{ opacity: '0.7' }}>
            {position} <br />
            Commander
          </p>
        </div>
        <SocialContainer>
          {social.map((item, i) => {
            return (
              <ImgSocial
                key={item}
                src={this.renderIcon(i)}
                alt=""
                onClick={() => this.openNewTab(item)}
              />
            )
          })}
        </SocialContainer>
        {isHover && <ImgOverlay src="/static/Icon/Mascot.svg" alt="" />}
        <ImgOverlayMobile src="/static/Icon/Mascot.svg" alt="" />
      </CommanderItemContainer>
    )
  }
}

export default CommanderItem
