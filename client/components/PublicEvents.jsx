import React from './react'

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicEvents: []
    }
  }

  render () {
    return (
      <div className='publiceventspg'>
        {this.props.events.map(event => {
          <Link key={events.id} to={`/public-events/${event.eventname}`} />
        })}
      </div>
    )
  }
}


export default PublicEvents