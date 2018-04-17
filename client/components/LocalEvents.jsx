import React from './react'

class LocalEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localEvents: []
    }
  }

  render () {
    return (
      <div className='localevents'>
        {this.props.events.map(event => {
          <Link key={events.id} to={`/local-events/${events.events}`} />
        })}
      </div>
    )
  }
}

export default LocalEvents