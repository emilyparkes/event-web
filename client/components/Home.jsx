import React from 'react'
import { Link } from 'react-router-dom'

import PublicEventsList from './PublicEventsList'
import LocalEventsList from './LocalEventsList'

import { getLocalEvents, getPublicEvents } from '../../server/db/db'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicEvents: [],
      localEvents: [],
      errorMessage: ''
    }
  }

  render() {
    return (
      <div className='homepg'>
        <h1>Home</h1>
        <h6>listed with events based on selection from preferences tab.</h6>
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