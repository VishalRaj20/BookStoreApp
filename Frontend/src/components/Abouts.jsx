import React from 'react'
import About from '../abouts/About'
import Navbar from './Navbar'
import Footer from './Footer'

function Abouts() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <About />
      </div>
      <Footer />
    </>
  )
}

export default Abouts
