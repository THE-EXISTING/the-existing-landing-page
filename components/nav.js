import React, { Component } from 'react'
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
    src: url('../static/font/avenirnext-medium.ttf');
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
    box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
    transition: all 0.3s ease;
  }

  .active {
    color: #2196f3 !important;
    opacity: 1 !important;
    border-bottom: 2px solid !important;
  }
`

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 200;
  transition: all 0.3s ease-out;
  will-change: transition;
`

const HeaderStyle = styled.header`
  font-family: andale-mono;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  max-width: 984px;
  margin: 0 auto;
  transition: 0.5s;
  will-change: transition;

  ${media.lessThan('large')`
    padding: 1rem 2rem !important;
    padding-left: max(2rem, env(safe-area-inset-left))  !important;
    padding-right: max(2rem, env(safe-area-inset-right)) !important;
    box-sizing: border-box;import { transition } from '@angular/animations';

  `};
`

const LogoStyle = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  background-image: url('/static/icon/Logo/EX_color.svg');

  ${media.lessThan('medium')`
    width: 5rem;
    height: 5rem;
  `};
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

  ${media.greaterThan('medium')`
    button {
      display: none;
    }
  `};
`

const AStyle = styled.div`
  font-size: 1.4rem;
  line-height: 1.63;
  text-align: center;
  padding: 1rem 0 0.2rem 0;
  margin-right: 4rem;

  ${media.lessThan('medium')`
    margin-right: 0;
  `};

  &:nth-last-child(2) {
    margin-right: 0;
  }

  a {
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.54;
    border-bottom: 2px solid transparent;
    text-decoration: none;

    &:hover {
      /* text-decoration: underline; */
      color: #2196f3;
      opacity: 1;
      border-bottom: 2px solid;
    }
  }
`

const Popup = styled.div`
  width: calc(100% - 20px);
  height: auto;
  position: absolute;
  left: 10px;
  top: 10px;
  justify-content: center;
  z-index: 100;
`

const PopupContainer = styled.div`
  background: #fff;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  font-size: 17px;
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 10px;
    }
  }
`

const HamburgerMenuContainer = styled.div`
  z-index: 101;
  cursor: pointer;
  ${media.greaterThan('medium')`
    display: none;
  `};
`

const duration = 150
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}
const transitionStyles = {
  exiting: { opacity: 0 },
  entered: { opacity: 1 }
}

class Nav extends Component {
  state = {
    isActive: false,
    isScrollDown: false
  }
  onHandleNavbarScroll = () => {
    let { isScrollDown } = this.state
    window.scrollY > 20
      ? !isScrollDown && this.setState({ isScrollDown: true })
      : isScrollDown && this.setState({ isScrollDown: false })
  }

  onHandleScrollTo = to => {
    scroller.scrollTo(to, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    this.setState({ isActive: false })
  }

  onHandleCloseNav = () => {
    this.setState({ isActive: false })
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
      <HeaderContainer className={classHide}>
        <GlobalStyle />
        <HeaderStyle
          style={this.state.isScrollDown ? { padding: '1rem 2rem' } : { padding: '4rem 2rem' }}
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
                DELLET
              </Link>
            </AStyle>
            <AStyle>
              <Link
                activeClass="active"
                spy={true}
                to="features"
                onClick={() => this.onHandleScrollTo('features')}
              >
                FEATURES
              </Link>
            </AStyle>
            <AStyle>
              <Link
                activeClass="active"
                spy={true}
                to="team"
                onClick={() => this.onHandleScrollTo('team')}
              >
                TEAM
              </Link>
            </AStyle>
            <AStyle>
              <Link
                activeClass="active"
                spy={true}
                to="contact"
                onClick={() => this.onHandleScrollTo('contact')}
              >
                CONTACT
              </Link>
            </AStyle>
            <AStyle>
              <a to="" target="_blank" href="https://github.com" onClick={this.onHandleCloseNav}>
                GITHUB
              </a>
            </AStyle>
          </NavStyled>
        </HeaderStyle>
      </HeaderContainer>
    )
  }
}

export default Nav
