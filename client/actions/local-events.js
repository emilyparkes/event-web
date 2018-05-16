import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_LOCAL_EVENTS = 'RECEIVE_LOCAL_EVENTS'
export const RECEIVE_LOCAL_EVENT_BY_NAME = 'RECEIVE_LOCAL_EVENT_BY_NAME'

export const receiveLocalEvents = (localEvents) => {
  return {
    type: RECEIVE_LOCAL_EVENTS,
    localEvents
  }
}

export function getLocalEvents() {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/local-events`)
      .then(res => {
        dispatch(receiveLocalEvents(res.body.localEvents))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}

export const receiveLocalEventByName = (event) => {
  return {
    type: RECEIVE_LOCAL_EVENT_BY_NAME,
    event
  }
}

export function getLocalEventByName(eventName) {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/local-events/${eventName}`)
      .then(res => {
        dispatch(receiveLocalEventByName(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting the event information'))
      })
  }
}   
