import request from 'superagent'

import { showError } from '../error'
import baseUrl from '../../lib/base-url'

export const RECEIVE_PUBLIC_EVENT_BY_NAME = 'RECEIVE_PUBLIC_EVENT_BY_NAME'

export const receivePublicEventByName = (publicEvent) => {
  return {
    type: RECEIVE_PUBLIC_EVENT_BY_NAME,
    publicEvent
  }
}

export function getPublicEventByName(eventName) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/public-events/${eventName}`)
      .then(res => {
        dispatch(receivePublicEventByName(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting the pevent information'))
      })
  }
}   
