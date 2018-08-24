import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getPublicEventByName } from '../../actions/public-e/p-event'

class PublicEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getPublicEventByName(this.props.match.params.eventName))
  }

  render() {
    return (
      <div className='publiceventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{this.props.match.params.eventName}</h1>
          </div>
        </div>

        <div className='page-section'>
          {this.props.publicEvent.description}
          {this.props.publicEvent.date_start}
          {this.props.publicEvent.date_end}
          {this.props.publicEvent.time_start}
          {this.props.publicEvent.time_end}
          {this.props.publicEvent.access}
          {this.props.publicEvent.tickets}
          {this.props.publicEvent.restrictions}

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    publicEvent: state.publicEvent
  }
}

export default connect(mapStateToProps)(PublicEvent)
