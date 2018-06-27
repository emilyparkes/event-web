import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventByName } from '../../actions/p-event'

class PublicEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getPublicEventByName(this.props.match.params.eventName))
  }

  render() {
    return (
      <div className='publiceventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Public Event...</h1>
            <h1>{event.eventName}</h1>
          </div>
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
    pEvent: state.pEvent
  }
}

export default connect(mapStateToProps)(PublicEvent)