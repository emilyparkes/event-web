import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getPublicEventByName } from '../../actions/p-event'

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
          {this.props.pEvent.date}
          {this.props.pEvent.time}
          {this.props.pEvent.location}
          {this.props.pEvent.address}
          {this.props.pEvent.tickets}
          {this.props.pEvent.website}
          {this.props.pEvent.blurb}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pEvent: state.pEvent
  }
}

export default connect(mapStateToProps)(PublicEvent)
