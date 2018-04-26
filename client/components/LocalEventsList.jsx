import React from 'react'
import { Link } from 'react-router-dom'

class LocalEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(getLocalEvents())
  }

  render() {
    return (
      <div className='localeventspg'>
        <h1>Local Events</h1>

        <div className='page-section'>
          {props.events.map(event => {
            <Link key={event.id} to={`/local-events/${event.eventName}`} >
              <h3>{event.eventName}</h3>
              <h6>{event.date}</h6>
              <p>{event.location}</p>
              <p>{event.blurb}</p>
            </Link>
          })}
        </div>

      </div>
    )
  }
}

export default LocalEvents