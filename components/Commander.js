import React from 'react'
import styled from 'styled-components'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'
import CommanderItem from './common/CommanderItem'

const CommnaderContainer = styled.div`
  text-align: center;
  margin: 2rem 0 10rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ImageOverlay = styled.img`
  position: absolute;
  opacity: 0.03;
  bottom: 0;
  right: -220px;
`

const team = [
  {
    img: '/static/team/Nonthawit.jpg',
    nickname: 'THE KHAENG',
    name: 'Nonthawit',
    position: `Mobile Development & UI/UX`,
    social: ['facebook', 'github', 'linkedin']
  },
  {
    img: '/static/team/Supakorn.jpg',
    nickname: 'ARM',
    name: 'Supakorn',
    position: 'Web Development',
    social: ['facebook', 'github', 'linkedin']
  },
  {
    img: '/static/team/Panupak.jpg',
    nickname: 'BIN',
    name: 'Panupak',
    position: 'Devops Development',
    social: ['facebook', 'github', 'linkedin']
  }
]

function Commander() {
  return (
    <Layout color="black">
      <HeaderText>Commander</HeaderText>
      <CommnaderContainer>
        {team.map(item => (
          <CommanderItem key={item.name} {...item} />
        ))}
      </CommnaderContainer>
      <ImageOverlay src="/static/Icon/Mascot.svg" alt="" />
    </Layout>
  )
}

export default Commander
