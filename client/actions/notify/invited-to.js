import request from 'superagent'

import { showError } from '../error'
import baseUrl from '../../lib/base-url'

export const RECEIVE_INVITED_TO_LIST = 'RECEIVE_INVITED_TO_LIST'

export const receiveInvitedToList = (invitedTo) => {
  return {
    type: RECEIVE_INVITED_TO_LIST,
    invitedTo
  }
}

export function getInvitedToList() {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/invitedto`)
      .then(res => {
        dispatch(receiveInvitedToList(res.body.invitedTo))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
