import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
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
    padding-bottom: 4.5px !important;
    border-bottom: 2px solid !important;
  }

`
const Index = () => (
  <div>
    <GlobalStyle />
    <Head title="Home" />
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
