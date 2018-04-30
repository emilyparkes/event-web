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
            <h1>The One Event</h1>
          </div>
        </div>

        <div className='page-section'>
          {eventName}
          {pEvent.date}
          {this.props.time}
          {this.props.location}
          {this.props.address}
          {this.props.tickets}
          {this.props.website}
          {this.props.blurb}
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