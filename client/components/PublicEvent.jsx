import React from 'react'
import { Link } from 'react-router-dom'

import { getPublicEventById } from '../actions/public-events'

class PublicEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      publicevents: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getPublicEventById(this.props.match.params.publicEvent))
  }

  render() {
    return (
      <div className='publiceventpg'>
        {this.props.publicevents.map(pevent => (
          <div key={pevent.id} className='interest-page-thumbnails'>
            <div className='h3-class'>
              {pevent.eventName}</div>

            <div className='thumbnail-p-text'>
              {pevent.time}
              {pevent.date}
              {pevent.blurb}
            </div>
          </div>

        )
        )}
      </div>
    )
  }
}

export default PublicEvent