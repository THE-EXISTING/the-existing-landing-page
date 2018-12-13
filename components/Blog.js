import React from 'react'
import Layout from './common/Layout'
import styled from 'styled-components'

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const DcenMedium = styled.div`
  margin: 5rem 7.4rem 0 7.4rem;
  border: 2px solid #d8d8d8;
  border-radius: 10px;

  div {
    margin: 2.4rem 4.6rem;
  }
`

const Text = styled.div`
  font-size: 3.2rem;
  margin: 7.2rem 0 5rem 0;
  text-align: center;
`

function Blog() {
  return (
    <Layout color="black">
      <BlogContainer>
        <DcenMedium>
          <div>
            <img src="/static/Icon/Medium_DCEN.svg" alt="" />
          </div>
        </DcenMedium>
        <DcenMedium>
          <div>
            <img src="/static/Icon/Medium_Nextzy.svg" alt="" />
          </div>
        </DcenMedium>
      </BlogContainer>
      <Text>Limit does not exist</Text>
    </Layout>
  )
}

export default Blog
