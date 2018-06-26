import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getLocalEvents } from '../../actions/local-events'

class LocalEvents extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getLocalEvents())
  }

  render() {
    return (
      <div className='localeventspg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Local Events</h1></div>
        </div>

        <div className='page-section'>
          {this.props.localEvents.map(lEvent =>
            <Link key={lEvent.id} to={`/local-events/${lEvent.eventName}`} >
              <button className='local-events-buttons'>{lEvent.eventName}</button>
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