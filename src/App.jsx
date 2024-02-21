import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marqee from './Components/Marqee'
import About from './Components/About'
import Img from './Components/Img'
import Featured from './Components/Featured'
import Ready from './Components/Ready'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <Img/>
      <Featured/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App
