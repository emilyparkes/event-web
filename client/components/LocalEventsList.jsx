import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getLocalEvents } from '../actions/local-events'

class LocalEvents extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   errorMessage: ''
    // }
  }

  componentDidMount() {
    this.props.dispatch(getLocalEvents())
  }

  render() {
    return (
      <div className='localeventspg'>
        <h1>Local Events</h1>

        <div className='page-section'>
          {props.localEvents.map(lEvent => {
            <Link key={lEvent.id} to={`/local-lEvents/${lEvent.eventName}`} >
              <h3>{lEvent.eventName}</h3>
              <h6>{lEvent.date}</h6>
              <p>{lEvent.location}</p>
              <p>{lEvent.blurb}</p>
            </Link>
          })}
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