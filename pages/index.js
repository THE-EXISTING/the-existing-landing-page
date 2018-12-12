import React from 'react'
import { Element } from 'react-scroll'
import Head from '../components/head'
import Nav from '../components/nav'
import Home from '../components/Home'
import Vision from '../components/Vision'
import Project from '../components/Project'
import Commander from '../components/Commander'

const Index = () => (
  <div>
    <Head title="Home" />
    <Element name="nav">
      <Nav />
    </Element>
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
  </div>
)

export default Index

// https://the-existing.netlify.com/
