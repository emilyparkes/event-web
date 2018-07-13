import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getLocalEventByName } from '../../actions/l-event'

class LocalEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getLocalEventByName(this.props.match.params.eventName))
  }


  render() {
    const { lEvent } = this.props
    return (
      <div className='localeventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{this.props.match.params.eventName}</h1></div>
        </div>

        <div className='page-section'>
          {lEvent.date}
          {lEvent.time}
          {lEvent.location}
          {lEvent.address}
          {lEvent.tickets}
          {lEvent.website}
          {lEvent.blurb}
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