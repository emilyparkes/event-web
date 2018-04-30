import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventByName } from '../actions/public-events'

class PublicEvent extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPublicEventByName(this.props.match.params.eventName))
  }

  render() {
    return (
      <div className='publiceventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{pEvent.eventName}</h1></div>
        </div>

        <div className='page-section'>
          {pEvent.date}
          {pEvent.time}
          {pEvent.location}
          {pEvent.address}
          {pEvent.tickets}
          {pEvent.website}
          {pEvent.blurb}
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