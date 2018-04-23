import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_PUBLIC_EVENTS = 'RECEIVE_PUBLIC_EVENTS'

export const receivePublicEvents = (events) => {
  return {
    type: RECEIVE_PUBLIC_EVENTS,
    events
  }
}

export function getPublicEvents () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/public-events`)
      .then(res => {
        dispatch(receivePublicEvents(res.body.events))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
