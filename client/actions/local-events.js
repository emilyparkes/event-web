import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_LOCAL_EVENTS = 'RECEIVE_LOCAL_EVENTS'

export const receiveLocalEvents = (events) => {
  return {
    type: RECEIVE_LOCAL_EVENTS,
    events
  }
}

export function getLocalEvents () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/local-events`)
      .then(res => {
        dispatch(receiveLOCAL_EVENTS(res.body.events))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
