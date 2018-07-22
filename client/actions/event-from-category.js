import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_EVENT_FROM_CATEGORY = 'RECEIVE_EVENT_FROM_CATEGORY'

export const receiveEventsByCategory = (eventFromCategory) => {
  return {
    type: RECEIVE_EVENT_FROM_CATEGORY,
    eventFromCategory
  }
}

export function getEventFromCategory (category, eventName) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/eventscategories/categories/${category}/${eventName}`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveEventsByCategory(res.body))
      })
      .catch((err) => {
        console.log(e.message)
        dispatch(showError(err.message))
      })
  }
}
