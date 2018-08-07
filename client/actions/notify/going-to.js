import request from 'superagent'

import { showError } from '../error'
import baseUrl from '../../lib/base-url'

export const RECEIVE_GOING_TO_LIST = 'RECEIVE_GOING_TO_LIST'

export const receiveGoingToList = (goingTo) => {
  return {
    type: RECEIVE_GOING_TO_LIST,
    goingTo
  }
}

export function getGoingToList() {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/goingto`)
      .then(res => {
        dispatch(receiveGoingToList(res.body.goingTo))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}