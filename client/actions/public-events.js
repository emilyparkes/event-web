import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_PUBLIC_EVENTS = 'RECEIVE_PUBLIC_EVENTS'
export const RECEIVE_PUBLIC_EVENT_BY_NAME = 'RECEIVE_PUBLIC_EVENT_BY_NAME'

export const receivePublicEvents = (publicEvents) => {
  return {
    type: RECEIVE_PUBLIC_EVENTS,
    publicEvents
  }
}

export function getPublicEvents () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/public-events`)
      .then(res => {
        dispatch(receivePublicEvents(res.body.publicEvents))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting the events information'))
      })
  }
}  

export const receivePublicEventByName = (pEvent) => {
  return {
    type: RECEIVE_PUBLIC_EVENT_BY_NAME,
    pEvent
  }
}

export function getPublicEventByName (id) {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/public-events/${id}`)
      .then(res => {
        dispatch(receivePublicEventByName(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting the event information'))
      })
  }
}   
