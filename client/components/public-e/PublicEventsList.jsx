import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPublicEvents } from '../../actions/public-events'

class PublicEvents extends React.Component {
  componentDidMount () {
    this.props.dispatch(getPublicEvents())
  }

  render () {
    return (
      <div className='publiceventspg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Public Events</h1></div>
        </div>

        <div className='page-section'>
          {this.props.publicEvents.map(pEvent =>
            <Link key={pEvent.id} to={`/public-events/${pEvent.eventName}`} >
              <button className='public-events-buttons'>
                {pEvent.eventName}
              </button>
            </Link>
          )}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    publicEvents: state.publicEvents
  }
}

export default connect(mapStateToProps)(PublicEvents)
