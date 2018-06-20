import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_LOCAL_EVENTS_BY_CATEGORY = 'RECEIVE_LOCAL_EVENTS_BY_CATEGORY'

export const receiveLocalEventsByCategory = (category) => {
  return {
    type: RECEIVE_LOCAL_EVENTS_BY_CATEGORY,
    category
  }
}

export function getLocalEventsByCategory(category) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/eventscategories/${category}`)
      .then(res => {
        dispatch(receiveLocalEventsByCategory(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting local category information'))
      })
  }
}
