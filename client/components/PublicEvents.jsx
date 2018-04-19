import React from 'react'
import { Link } from 'react-router-dom'
// import {connect} from 'react-redux'

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }

  render() {
    return (
      <div className='publiceventspg'>
        <h1>Public Events</h1>

        <div className='page-section'>
          {this.props.events.map(event => {
            <Link key={event.id} to={`/public-events/${event.eventname}`} >
            <h3>{event.eventname}</h3>
            <h6>{event.date}</h6>
            <p>{event.location}</p>
            <p>{event.blurb}</p>
            </Link>
          })}
        </div>

      </div>
    )
  }
}

export default PublicEvents
