import React from 'react'
// import TextForm from '../components/TextForm'
import Navbar from '../components/Navbar'
import About from '../components/About'


function Home() {
  return (
    <>
      <Navbar title='textUtils' about='AboutUtils' contact='utilsHere' />
      {/* <TextForm title="Enter the text to analyze..." /> */}
      <About />
    </>
  )
}

export default Home
