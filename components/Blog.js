import React from 'react'
import Layout from './common/Layout'
import styled from 'styled-components'
import media from 'styled-media-query'

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

function Blog() {
  function openNewTab(url) {
    window.open(url, '_blank')
  }

  return (
    <Layout color="black">
      <BlogContainer>
        <DcenMedium onClick={() => openNewTab('https://medium.com/dcen')}>
          <div>
            <img src="/static/Icon/Medium_DCEN.svg" alt="" />
          </div>
        </DcenMedium>
        <DcenMedium onClick={() => openNewTab('https://blog.nextzy.me/')}>
          <div style={{ padding: '4.5px' }}>
            <img src="/static/Icon/Medium_Nextzy.svg" alt="" />
          </div>
        </DcenMedium>
      </BlogContainer>
      <Text>Limits do not exist</Text>
    </Layout>
  )
}

export default Blog
