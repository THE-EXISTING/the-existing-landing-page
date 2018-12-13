import React, { Component } from 'react'
import styled from 'styled-components'

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
  /* filter: grayscale(100%); */
  filter: ${props => (props.isHover ? '' : 'grayscale(50%)')};
`

const FontAvenirContainer = styled.div`
  font-family: avenirnext-medium;
`

const ImgOverlay = styled.img`
  position: absolute;
  width: 200px;
  right: -100px;
  bottom: 0;
  opacity: 0.02;
`

const SocialContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1rem;
`

const ImgSocial = styled.img`
  margin: 0.5rem;
  opacity: 0.34;
  cursor: pointer;
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

  render() {
    const { img, nickname, name, position, social } = this.props
    const { isHover } = this.state

    return (
      <CommanderItemContainer
        onMouseOver={this.handleOnMouseHover}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <TeamImg src={img} isHover={isHover} />
        <FontAvenirContainer>
          <p style={{ fontSize: '1.6rem', marginBottom: '0' }}>{nickname}</p>
          <p style={{ fontSize: '1.4rem', marginTop: '2px' }}>{name}</p>
          <p style={{ fontSize: '1.6rem' }}>Co-founder</p>
        </FontAvenirContainer>

        <p style={{ opacity: '0.7' }}>
          {position} <br />
          Commander
        </p>
        <SocialContainer>
          <ImgSocial src="/static/Icon/Facebook.svg" alt="" />
          <ImgSocial src="/static/Icon/LinkedIn.svg" alt="" />
          <ImgSocial src="/static/Icon/Github.svg" alt="" />
        </SocialContainer>
        {isHover && <ImgOverlay src="/static/Icon/Mascot.svg" alt="" />}
      </CommanderItemContainer>
    )
  }
}

export default CommanderItem
