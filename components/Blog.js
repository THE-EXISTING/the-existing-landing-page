import React, { Component } from 'react'
import Layout from './common/Layout'
import styled from 'styled-components'
import media from 'styled-media-query'
// import Typed from 'react-typed'
import Typed from 'typed.js'

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const DcenMedium = styled.div`
  cursor: pointer;
  margin: 5rem 3.4rem 0 3.4rem;
  border: 2px solid rgba(216, 216, 216, 0.34);

  border-radius: 10px;

  div {
    margin: 2.4rem 4.6rem;

    ${media.lessThan('medium')`
      margin: 1.4rem 2.6rem;
    `};
  }
`

const Text = styled.div`
  font-size: 3.2rem;
  margin: 7.2rem 0 0 0;
  text-align: center;

  ${media.lessThan('medium')`
    font-size: 2.4rem;
  `};
`

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const options = {
      strings: ['Limits do not exist.'],
      smartBackspace: true,
      loop: false,
      backSpeed: 50
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  openNewTab = url => {
    window.open(url, '_blank')
  }

  render() {
    return (
      <Layout color="black">
        <BlogContainer>
          <DcenMedium onClick={() => this.openNewTab('https://medium.com/dcen')}>
            <div>
              <img src="/static/Icon/Medium_DCEN.svg" alt="" />
            </div>
          </DcenMedium>
          <DcenMedium onClick={() => this.openNewTab('https://blog.nextzy.me/')}>
            <div style={{ padding: '4.5px' }}>
              <img src="/static/Icon/Medium_Nextzy.svg" alt="" />
            </div>
          </DcenMedium>
        </BlogContainer>
        <Text>
          <span
            style={{ whiteSpace: 'pre' }}
            ref={el => {
              this.el = el
            }}
          />
        </Text>
      </Layout>
    )
  }
}

export default Blog
