import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { scroller, Link } from 'react-scroll'
import ContactButton from './ContactButton'

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
  padding: ${({ isScrollDown }) => (isScrollDown ? '2rem 1.6rem' : '3.6rem 1.6rem')};

  ${media.lessThan('large')`
    padding-left: max(2rem, env(safe-area-inset-left))  !important;
    padding-right: max(2rem, env(safe-area-inset-right)) !important;
    box-sizing: border-box;
  `};

  ${media.lessThan('medium')`
    padding: 1.8rem 1.6rem;

    padding-left: calc(max(22px, env(safe-area-inset-left)));
    padding-right: calc(max(22px, env(safe-area-inset-right)));
  `};
`

const LogoStyle = styled.div`
  cursor: pointer;
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

const NavStyledMobile = styled.nav`
  ${media.greaterThan('medium')`
    display: none;
  `};
  display: flex;
  padding: 2rem 1rem;
  overflow-x: scroll;
  -webkit-mask-image: linear-gradient(to right, transparent, black 10px, black 90%, transparent);
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

  ${media.lessThan('medium')`
    /* flex: 1; */
    padding: 0 2rem;

    a {
      padding-bottom: 1.4rem;
    }
      
  `};
`

class Nav extends Component {
  navRef = React.createRef()

  state = {
    isScrollDown: false,
    isMobile: false
  }

  handleCheckWindowSize = () => {
    if (window.innerWidth < 768 && !this.state.isMobile) {
      this.setState({ isMobile: true })
    }
  }

  onHandleNavbarScroll = () => {
    const { isScrollDown } = this.state
    const navOffsetTop = this.navRef.current.offsetTop

    if (window.scrollY > navOffsetTop && !isScrollDown) {
      this.setState({ isScrollDown: true })
    } else if (window.scrollY <= navOffsetTop && isScrollDown) {
      this.setState({ isScrollDown: false })
    }
  }

  onHandleScrollTo = to => {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuad',
      offset: this.state.isMobile ? -115 : 0
    })
  }

  componentDidMount() {
    this.onHandleNavbarScroll()
    window.addEventListener('scroll', this.onHandleNavbarScroll)
    this.handleCheckWindowSize()
    window.addEventListener('resize', this.handleCheckWindowSize)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onHandleNavbarScroll)
    window.removeEventListener('resize', this.handleCheckWindowSize)
  }

  render() {
    const classHide = this.state.isScrollDown ? 'scroll' : ''

    return (
      <Fragment>
        <HeaderContainer ref={this.navRef} className={classHide}>
          <HeaderStyle isScrollDown={this.state.isScrollDown}>
            <div onClick={() => this.onHandleScrollTo('home')}>
              <LogoStyle />
            </div>
            <NavStyled>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="home"
                  onClick={() => this.onHandleScrollTo('home')}
                  offset={-115}
                >
                  Home
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="vision"
                  onClick={() => this.onHandleScrollTo('vision')}
                >
                  Vision
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="project"
                  onClick={() => this.onHandleScrollTo('project')}
                  offset={-115}
                >
                  Project
                </Link>
              </AStyle>
              <AStyle>
                <Link
                  activeClass="active"
                  spy={true}
                  to="commander"
                  onClick={() => this.onHandleScrollTo('commander')}
                  offset={-115}
                >
                  Commander
                </Link>
              </AStyle>

              <ContactButton>CONTACT</ContactButton>
            </NavStyled>
          </HeaderStyle>
          <NavStyledMobile>
            <AStyle>
              <Link
                spy={true}
                to="home"
                onClick={() => this.onHandleScrollTo('home')}
                offset={-115}
              >
                Home
              </Link>
            </AStyle>
            <AStyle>
              <Link
                spy={true}
                to="vision"
                onClick={() => this.onHandleScrollTo('vision')}
                offset={-115}
              >
                Vision
              </Link>
            </AStyle>
            <AStyle>
              <Link
                spy={true}
                to="project"
                onClick={() => this.onHandleScrollTo('project')}
                offset={-115}
              >
                Project
              </Link>
            </AStyle>
            <AStyle>
              <Link
                spy={true}
                to="commander"
                onClick={() => this.onHandleScrollTo('commander')}
                offset={-115}
              >
                Commander
              </Link>
            </AStyle>

            <ContactButton>CONTACT</ContactButton>
          </NavStyledMobile>
        </HeaderContainer>
      </Fragment>
    )
  }
}

export default Nav
