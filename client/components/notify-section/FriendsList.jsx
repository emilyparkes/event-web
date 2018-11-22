import React from 'react'
import {connect} from 'react-redux'
// import { Link } from 'react-router-dom'

import {getFriendsList} from '../../actions/notify/friends-list'

class FriendsList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getFriendsList())
  }

  render () {
    return (
      <div className='friends'>
        <div>Friends:</div>
        {this.props.friendsList.map(friend =>
          <div key={friend.friend_id}>{friend.username}</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friendsList: state.friendsList
  }
}

export default connect(mapStateToProps)(FriendsList)
