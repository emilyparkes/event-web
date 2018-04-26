import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_LOCAL_EVENTS = 'RECEIVE_LOCAL_EVENTS'

export const receiveLocalEvents = (localevents) => {
  return {
    type: RECEIVE_LOCAL_EVENTS,
    localevents
  }
}

export function getLocalEvents () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/local-events`)
      .then(res => {
        dispatch(receiveLocalEvents(res.body.localevents))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
