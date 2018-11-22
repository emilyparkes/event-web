import request from 'superagent'

import {showError} from '../error'
import baseUrl from '../../lib/base-url'

export const RECEIVE_INTERESTED_IN_LIST = 'RECEIVE_INTERESTED_IN_LIST'

export const receiveInterestedInList = (interestedIn) => {
  return {
    type: RECEIVE_INTERESTED_IN_LIST,
    interestedIn
  }
}

export function getInterestedInList () {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/interestedin`)
      .then(res => {
        dispatch(receiveInterestedInList(res.body.interestedIn))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
