import React from 'react'
import LabelBottomNavigation from './sections/BottomNav'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Home</h1>
          </div>
          <h6>Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.</h6>
        </div>

        {/* suggested for you */}

        {/* discover other events */}

        {/* upcoming */}

        {/* <div className='page-section'>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }</div> */}
        <LabelBottomNavigation/>
      </>
    )
  }
}

export default Home
