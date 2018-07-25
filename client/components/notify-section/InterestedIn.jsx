import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getInterestedInList } from '../../actions/notify/interested-in'

class InterestedIn extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getInterestedInList())
  }

  render() {
    return (
      <div className='friends'>
        <div>Interested In:</div>
        {this.props.interestedIn.map(event =>
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
    interestedIn: state.interestedIn
  }
}


export default connect(mapStateToProps)(InterestedIn)