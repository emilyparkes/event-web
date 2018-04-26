import request from 'superagent'

import {showError} from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_PUBLIC_EVENTS = 'RECEIVE_PUBLIC_EVENTS'

export const receivePublicEvents = (publicevents) => {
  return {
    type: RECEIVE_PUBLIC_EVENTS,
    publicevents
  }
}

export function getPublicEvents () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/publicevents`)
      .then(res => {
        dispatch(receivePublicEvents(res.body.publicevents))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting event information'))
      })
  }
}   
