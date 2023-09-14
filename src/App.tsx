import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Monial from './components/Monial'
import Section from './components/Section'
import Footer from './components/Footer'

export default function App() {

  Aos.init({
    duration: 1800,
    offset: 200
  })
  return (
    <div className='overflow-hidden'>
      Started
    </div>
  )
}
