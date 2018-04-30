import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventById } from '../actions/public-events'

class PublicEvent extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPublicEventById())
  }

  render() {
    return (
      <div className='publiceventpg'>
        <h1>{event.eventName}</h1>

        <div className='page-section'>
          {event.date}
          {event.time}
          {event.location}
          {event.address}
          {event.tickets}
          {event.website}
          {event.blurb}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.event
  }
}

export default connect(mapStateToProps)(PublicEvent)