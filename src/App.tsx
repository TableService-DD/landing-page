import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import Info from './components/Info'
import About from './components/About'
import Features from './components/Features'
import Section from './components/Section'
import Footer from './components/Footer'

export default function App() {

  Aos.init({
    duration: 1800,
    offset: 0
  })
  return (
    <div className='overflow-hidden'>
      <Info />
      <About />
      <Features />
      <Section />
      <Footer />
    </div>
  )
}
