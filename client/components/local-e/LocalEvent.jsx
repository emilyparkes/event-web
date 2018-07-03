import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getLocalEventByName } from '../../actions/l-event'

class LocalEvent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getLocalEventByName(this.props.match.params.eventName))
  }


  render() {
    return (
      <div className='localeventpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{this.props.match.params.eventName}</h1></div>
        </div>

        <div className='page-section'>
          {this.props.lEvent.date}
          {this.props.lEvent.time}
          {this.props.lEvent.location}
          {this.props.lEvent.address}
          {this.props.lEvent.tickets}
          {this.props.lEvent.website}
          {this.props.lEvent.blurb}
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