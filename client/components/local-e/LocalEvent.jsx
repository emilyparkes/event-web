import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getLocalEventByName } from '../../actions/l-event'

class LocalEvent extends React.Component {
 
  componentDidMount() {
    this.props.dispatch(getLocalEventByName(this.props.match.params.eventName))
  }

  render() {
    return (
      <div className='localeventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Local Event...</h1>
            <h1>{this.props.event.eventName}</h1></div>
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

export default connect(mapStateToProps)(LocalEvent)