import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_EVENTS_BY_CATEGORY = 'RECEIVE_EVENTS_BY_CATEGORY'

export const receiveEventsByCategory = (eventsInCategory) => {
  return {
    type: RECEIVE_EVENTS_BY_CATEGORY,
    eventsInCategory
  }
}

export function getEventsByCategory (category) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/eventscategories/categories/${category}`)
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
