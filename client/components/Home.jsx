import React from 'react'

import PublicEvents from './PublicEvents'
import LocalEvents from './LocalEvents'

const Home = () => {
  return (
    <div className='homepg'>
    <h1>Home page with preferences based on selection.</h1>
      <div className='page-section'>
        <PublicEvents /></div>
      
      <div className='page-section'>
        <LocalEvents /></div>

    </div>
  )
}

export default Home