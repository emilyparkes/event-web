import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEvents } from '../actions/public-events'

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicevents: [],
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(getPublicEvents())
  }

  render() {
    // const publicevents = this.props.publicevents
    // if (!publicevents) {
    //   return null
    // }
    return (
      <div className='publiceventspg'>
        <h1>Public Events</h1>

        <div className='page-section'>
          {publicevents.map(pevent =>
            <Link key={pevent.id} to={`/public-events/${pevent.eventName}`} >
              <button className='public-events-buttons'>
                {pevent.eventName}
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
    publicevents: state.publicevents
  }
}

export default connect(mapStateToProps)(PublicEvents)
