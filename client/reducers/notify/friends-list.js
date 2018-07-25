import {
  RECEIVE_FRIENDS_LIST } from '../../actions/notify/friends-list'

const initialState = []

const friendsList = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FRIENDS_LIST:
      return action.friendsList
    default:
      return state
  }
}

export default friendsList
