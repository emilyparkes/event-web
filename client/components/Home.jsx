import React from 'react'
import { Link } from 'react-router-dom'

import PublicEvents from './PublicEvents'
import LocalEvents from './LocalEvents'

import { getLocalEvents, getPublicEvents } from '../../server/db/db'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localEvents: [],
      publicEvents: [],
      errorMessage: ''
    }
  }

  componentDidMount () {
    this.props.dispatch(getLocalEvents())
    this.props.dispatch(getPublicEvents())
  }


  render() {
    const { publicEvents, localEvents } = this.props
    return (
      <div className='homepg'>
        <h1>Home</h1>
        <h6>listed with events based on selection from preferences tab.</h6>
        <div className='page-section'>
          <Link to={'/public-events'}>
            <PublicEvents
               />
               </Link></div>
        <div className='page-section'>
          <Link to={'/local-events'}>
            <LocalEvents
              events={localEvents}
              getEvents={this.getLocalEvents} /></Link></div>

        {/* <div className='page-section'>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }</div> */}

      </div>
    )
  }
}

export default Home