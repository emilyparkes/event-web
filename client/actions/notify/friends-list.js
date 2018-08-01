import request from 'superagent'

import { showError } from '../error'
import baseUrl from '../../lib/base-url'

export const RECEIVE_FRIENDS_LIST = 'RECEIVE_FRIEND_LIST'

export const receiveFriendsList = (friendsList) => {
  return {
    type: RECEIVE_FRIENDS_LIST,
    friendsList
  }
}

export function getFriendsList() {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveFriendsList(res.body.friendsList))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
