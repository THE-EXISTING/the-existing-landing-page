import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { scroller, Link } from 'react-scroll'

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
  font-family: ProductSans-Regular;
  width: 10rem;
  height: 2.8rem;
  color: #ffffff;
  background-color: transparent;
  border-radius: 5px;

  ${media.lessThan('medium')`
    display: none;
  `};
`

class Nav extends Component {
  navRef = React.createRef()

  state = {
    isScrollDown: false
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
      smooth: 'easeInOutQuad'
    })
  }

  componentDidMount() {
    this.onHandleNavbarScroll()
    window.addEventListener('scroll', this.onHandleNavbarScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onHandleNavbarScroll)
  }

  render() {
    const classHide = this.state.isScrollDown ? 'scroll' : ''

    return (
      <Fragment>
        <HeaderContainer ref={this.navRef} className={classHide}>
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
                  to="home"
                  onClick={() => this.onHandleScrollTo('home')}
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
                >
                  Commander
                </Link>
              </AStyle>

              <ContactButton>CONTACT</ContactButton>
            </NavStyled>
          </HeaderStyle>
        </HeaderContainer>
      </Fragment>
    )
  }
}

export default Nav
