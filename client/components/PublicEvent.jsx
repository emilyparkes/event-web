import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventByName } from '../actions/public-events'

class PublicEvent extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPublicEventByName(this.props.match.params.id))
  }

  render() {
    return (
      <div className='publiceventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{eventName}</h1></div>
        </div>

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