import React from 'react'
import { Link } from 'react-router-dom'

class LocalEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }

  render() {
    return (
      <div className='localeventspg'>
        <h1>Page with all local events, listed from most recent date (today) to furthest date.</h1>

        <div className='page-section'>
          {this.props.events.map(event => {
            <Link key={event.id} id={event.id} to={`/local-events/${event.eventname}`} />
          })}
        </div>

      </div>
    )
  }
}

export default LocalEvents