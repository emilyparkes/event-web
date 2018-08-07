import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getGoingToList } from '../../actions/notify/going-to'
class GoingTo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getGoingToList())
  }

  render() {
    return (
      <div className='goingto'>
        <div>Going to:</div>
        {this.props.goingTo.map(event =>
          <div key={event.event_id}>
          {event.eventName}
          {event.date}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goingTo: state.goingTo
  }
}


export default connect(mapStateToProps)(GoingTo)