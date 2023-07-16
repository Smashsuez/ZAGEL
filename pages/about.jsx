import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'

const about = () => {
  return (
    <div>
        <Navbar/>
        
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default about