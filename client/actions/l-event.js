import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_LOCAL_EVENT_BY_NAME = 'RECEIVE_LOCAL_EVENT_BY_NAME'

export const receiveLocalEventByName = (lEvent) => {
  return {
    type: RECEIVE_LOCAL_EVENT_BY_NAME,
    lEvent
  }
}

export function getLocalEventByName(eventName) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/local-events/${eventName}`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveLocalEventByName(res.body))
      })
      .catch((e) => {
        console.log(e.message)
        dispatch(showError('An unexpected error in getting the levent information'))
      })
  }
}   
