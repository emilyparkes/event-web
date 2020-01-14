import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getLocalEventByName } from '../../actions/local-events'

class LocalEvent extends React.Component {
  componentDidMount () {
    this.props.dispatch(getLocalEventByName(this.props.match.params.eventName))
  }

  render () {
    const { lEvent } = this.props
    return (
      <div className='localeventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{this.props.match.params.eventName}</h1></div>
        </div>

        <div className='page-section'>
          {lEvent.description}
          {lEvent.date_start}
          {lEvent.date_end}
          {lEvent.time_start}
          {lEvent.time_end}
          {lEvent.access}
          {lEvent.tickets}
          {lEvent.restrictions}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lEvent: state.lEvent
  }
}

export default connect(mapStateToProps)(LocalEvent)
