import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getLocalEvents } from '../../actions/local-e/local-events'

class LocalEvents extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getLocalEvents())
  }

  render() {
    return (
      <div className='localeventspg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Local Events</h1></div>
        </div>

        <div className='page-section'>
          {this.props.localEvents.map(event =>
            <Link key={event.id} to={`/local-events/${event.eventName}`} >
              <button className='local-events-buttons'>
                {event.eventName}
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
    localEvents: state.localEvents
  }
}

export default connect(mapStateToProps)(LocalEvents)
