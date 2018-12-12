import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'andale-mono';
    src: url('../static/font/andale_mono.ttf');
  }

  @font-face {
    font-family: 'avenirnext-demi-bold';
    src: url('../static/font/avenirnext_demi_bold.ttf');
  }

  @font-face {
    font-family: 'avenirnext-medium';
    src: url('../static/font/avenirnext_medium.ttf');
  }

  @font-face {
    font-family: 'avenirnext-regular';
    src: url('../static/font/avenirnext_regular.ttf');
  }

  html {
    font-size: 10px;
  }

  html, body {
    margin: 0;
    font-family: 'andale-mono', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
    background-color: #242424;
    color: #FFFFFF;
  }

  .scroll {
    background-color: #1f1f1f;
    box-shadow: 0 0 4px #1f1f1f, 0 4px 8px #1f1f1f;
  }

  .active {
    opacity: 1 !important;
    padding-bottom: 4.5px;
    border-bottom: 2px solid;
  }
`

const HeaderContainer = styled.div`
  font-family: andale-mono;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  transition: all 0.5s ease;
  will-change: transition;
`

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  max-width: 984px;
  margin: 0 auto;
  transition: all 0.3s;
  will-change: transition;

  ${media.lessThan('large')`
    padding-left: max(2rem, env(safe-area-inset-left))  !important;
    padding-right: max(2rem, env(safe-area-inset-right)) !important;
    box-sizing: border-box;
  `};
`

const LogoStyle = styled.div`
  width: 5rem;
  height: 2.4rem;
  background-image: url('/static/Logo/EX_color.svg');
`

const NavStyled = styled.nav`
  margin-left: auto;
  display: flex;
  height: 100%;
  align-items: center;

  ${media.lessThan('medium')`
    a {
      display: none;
    }
  `};
`

const AStyle = styled.div`
  font-size: 1.6rem;
  text-align: center;
  margin-right: 3.2rem;

  ${media.lessThan('medium')`
    margin-right: 0;
  `};

  &:nth-last-child(1) {
    margin-right: 0;
  }

  a {
    cursor: pointer;
    opacity: 0.7;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    padding-bottom: 0.45rem;
    transition: all 0.3s;
    will-change: transition;

    &:hover {
      opacity: 1;
      border-bottom: 2px solid;
    }
  }
`

const ContactButton = styled.button`
  cursor: pointer;
  font-size: 1.4rem;
  font-family: 'avenirnext-medium';
  width: 10rem;
  height: 2.8rem;
  color: #ffffff;
  background-color: transparent;
  border-radius: 5px;
`

class Nav extends Component {
  state = {
    isActive: false,
    isScrollDown: false
  }
  onHandleNavbarScroll = () => {
    let { isScrollDown } = this.state
    window.scrollY > 15
      ? !isScrollDown && this.setState({ isScrollDown: true })
      : isScrollDown && this.setState({ isScrollDown: false })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onHandleNavbarScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onHandleNavbarScroll)
  }

  render() {
    let classHide = this.state.isScrollDown ? 'scroll' : ''

    return (
      <Fragment>
        <GlobalStyle />
        <HeaderContainer className={classHide}>
          <HeaderStyle
            style={
              this.state.isScrollDown ? { padding: '2rem 1.6rem' } : { padding: '3.6rem 1.6rem' }
            }
          >
            <div>
              <LogoStyle />
            </div>
            <NavStyled>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="wallet"
                  onClick={() => this.onHandleScrollTo('wallet')}
                >
                  Home
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="features"
                  onClick={() => this.onHandleScrollTo('features')}
                >
                  Vision
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="team"
                  onClick={() => this.onHandleScrollTo('team')}
                >
                  Commander
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="contact"
                  onClick={() => this.onHandleScrollTo('contact')}
                >
                  Project
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="contact"
                  onClick={() => this.onHandleScrollTo('contact')}
                >
                  <ContactButton>CONTACT</ContactButton>
                </Link>
              </AStyle>
            </NavStyled>
          </HeaderStyle>
        </HeaderContainer>
      </Fragment>
    )
  }
}

export default Nav
