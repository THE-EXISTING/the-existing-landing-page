import React from 'react'
import Header from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
import { Element } from 'react-scroll'
import Head from '../components/common/head'
import Nav from '../components/common/nav'
import Home from '../components/Home'
import Vision from '../components/Vision'
import Project from '../components/Project'
import Commander from '../components/Commander'
import Partnership from '../components/Partnership'
import Blog from '../components/Blog'
import Footer from '../components/common/footer'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'andale-mono';
    src: url('../static/font/andale_mono.ttf');
  }

  @font-face {
    font-family: 'ProductSans-Bold';
    src: url('../static/font/ProductSans-Bold.ttf');
  }

  @font-face {
    font-family: 'ProductSans-Regular';
    src: url('../static/font/ProductSans-Regular.ttf');
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
    padding-bottom: 4.5px !important;
    border-bottom: 2px solid !important;

    ${media.lessThan('medium')`
      padding-bottom: 14px !important;
    `};
  }

  .slick-dots {
    li {
      margin: 0;
    }

    button {
      &::before {
        color: white !important;
      }
    }
  }

  .slick-active {
    button {
      &::before {
        font-size: 10px !important;
        color: white !important;
      }
    }
  }

  .slick-list {
    padding-bottom: 24px !important;
  }

  .border-hover > .slick-list > .slick-track > .slick-active > div > .active-border {
    box-shadow: 0 0 0 2px #d8d8d8;
    border-radius: 4px;
  }

`
const Index = () => (
  <div>
    <Header>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Header>
    <GlobalStyle />
    <Head />
    <Nav />

    <Element name="home">
      <Home />
    </Element>
    <Element name="vision">
      <Vision />
    </Element>
    <Element name="project">
      <Project />
    </Element>
    <Element name="commander">
      <Commander />
    </Element>
    <Element name="partnership">
      <Partnership />
    </Element>
    <Element name="blog">
      <Blog />
    </Element>
    <Footer />
  </div>
)

export default Index

// https://the-existing.netlify.com/
