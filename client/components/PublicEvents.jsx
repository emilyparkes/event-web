import React from 'react'
import { Link } from 'react-router-dom'

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: ''
    }
  }

  render() {
    return (
      <div className='publiceventspg'>
        <h1>Page with all public events, listed from most recent date (today) to furthest date.</h1>

        <div className='page-section'>
          {this.props.events.map(event => {
            <Link key={events.id} to={`/public-events/${event.eventname}`} />
          })}
        </div>

      </div>
    )
  }
}


export default PublicEvents