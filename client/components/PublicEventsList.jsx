import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEvents } from '../actions/public-events'

class PublicEvents extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPublicEvents())
  }

  render() {
    return (
      <div className='publiceventspg'>
        <h1>Public Events</h1>

        <div className='page-section'>
          {this.props.publicEvents.map(pEvent =>
            <Link key={pEvent.id} to={`/public-events/${pEvent.id}`} >
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
