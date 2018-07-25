import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { getInvitedToList } from '../../actions/notify/invited-to'

class Invites extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getInvitedToList())
  }

  render() {
    return (
      <div className='invitedto'>
        <div>Invited to:</div>
        {this.props.invitedTo.map(invite =>
          <div key={invite.event_id}>
            {invite.eventName}
            {invite.date}
          </div>
        )}
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      invitedTo: state.invitedTo
    }
  }


  export default connect(mapStateToProps)(Invites)