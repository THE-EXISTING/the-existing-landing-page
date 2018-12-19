import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Layout from './common/Layout'
import HeaderText from './common/HeaderText'
import CommanderItem from './common/CommanderItem'
import Slider from 'react-slick'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: 0,
  className: 'border-hover'
}

const CommnaderContainer = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${media.lessThan('medium')`
    display: none;
  `};
`

const CommanderContainerMobile = styled.div`
  display: none;
  text-align: center;

  ${media.lessThan('medium')`
    display: block;
  `};
`

const ImageOverlay = styled.img`
  position: absolute;
  opacity: 1;
  bottom: 0;
  right: -220px;

  ${media.lessThan('medium')`
    display: none;
  `};
`

const team = [
  {
    img: '/static/team/Nonthawit.jpg',
    nickname: 'THE KHAENG',
    name: 'Nonthawit',
    position: `Mobile Development & UI/UX`,
    social: [
      'https://www.facebook.com/nonthawit',
      'https://www.linkedin.com/in/nonthawit/',
      'https://github.com/TheKhaeng'
    ]
  },
  {
    img: '/static/team/Supakorn.jpg',
    nickname: 'ARM',
    name: 'Supakorn',
    position: 'Web Development',
    social: [
      'https://www.facebook.com/rainstormza',
      'https://www.linkedin.com/in/supakorn-thongtra-4a656377/',
      'https://github.com/rainstormza'
    ]
  },
  {
    img: '/static/team/Panupak.jpg',
    nickname: 'BIN',
    name: 'Panupak',
    position: 'Devops Development',
    social: [
      'https://www.facebook.com/profile.php?id=100019950422810',
      'https://www.linkedin.com/in/panupak-wichaidit-a36413b1/',
      'https://github.com/newnok6'
    ]
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
      <CommanderContainerMobile>
        <Slider {...settings}>
          {team.map(item => (
            <CommanderItem key={item.name} {...item} />
          ))}
        </Slider>
      </CommanderContainerMobile>
      <ImageOverlay src="/static/Icon/Mascot_bg.svg" alt="" />
    </Layout>
  )
}

export default Commander
