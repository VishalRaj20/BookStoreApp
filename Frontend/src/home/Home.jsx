import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'

function Home() {
  const[query, setQuery] = useState('');
  return (
    <>
      <Navbar setQuery={setQuery}/>
      <Banner />
      <FreeBook query={query}/>
      <Footer />
    </>
  )
}

export default Home
