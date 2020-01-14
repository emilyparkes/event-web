import React from 'react'
import LabelBottomNavigation from './sections/BottomNav'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className='page-heading-section'>
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
