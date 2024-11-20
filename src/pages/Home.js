import React from 'react'
import TextForm from '../components/TextForm'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <>
      <Navbar title='textUtils' about='AboutUtils' contact='utilsHere' />
      <TextForm title="Enter the text to analyze..." />
    </>
  )
}

export default Home
