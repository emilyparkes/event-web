import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getLocalEventByName } from '../../actions/local-e/l-event'

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
          {this.props.lEvent.description}
          {this.props.lEvent.date_start}
          {this.props.lEvent.date_end}
          {this.props.lEvent.time_start}
          {this.props.lEvent.time_end}
          {this.props.lEvent.access}
          {this.props.lEvent.tickets}
          {this.props.lEvent.restrictions}
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
