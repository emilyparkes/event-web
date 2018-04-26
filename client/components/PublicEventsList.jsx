import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

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
    return (
      <div className='publiceventspg'>
        <h1>Public Events</h1>

        <div className='page-section'>
          {this.props.publicevents.map(pevent =>
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
