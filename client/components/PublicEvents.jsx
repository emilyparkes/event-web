import React from './react'

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicEvents: []
    }
  }

  render() {
    return (
      <div className='publicevents'>
        {this.props.events.map(event => {
          <Link key={events.id} to={`/public-events/${events.events}`} />
        })}
      </div>
    )
  }
}

export default PublicEvents