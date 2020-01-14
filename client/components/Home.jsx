import React from 'react'
import Container from '@material-ui/core'
import LabelBottomNavigation from './sections/BottomNav'

class Home extends React.Component {
  render () {
    return (
      <Container>
        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Home</h1>
          </div>
          <h6>Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.</h6>
        </div>

        {/* <div className='page-section'>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }</div> */}
        <LabelBottomNavigation/>
      </Container>
    )
  }
}

export default Home
