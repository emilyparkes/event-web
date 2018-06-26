import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='homepg'>
        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Home</h1>
            </div>
            <h6>listed with events based on selection from preferences tab.</h6>
        </div>

       
        <div className='page-section'>
          <Link to={'/public-events'}>
            <button className='pevent-buttons'>
              Public Events
              </button>
          </Link>

        </div>
        <div className='page-section'>
          <Link to={'/local-events'}>
            <button className='levent-buttons'>
              Local Events
              </button>
          </Link></div>

        {/* <div className='page-section'>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }</div> */}

      </div>
    )
  }
}

export default Home