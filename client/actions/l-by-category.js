import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_LOCAL_EVENTS_BY_CATEGORY = 'RECEIVE_LOCAL_EVENTS_BY_CATEGORY'

export const receiveLocalEventsByCategory = (categoryType) => {
  return {
    type: RECEIVE_LOCAL_EVENTS_BY_CATEGORY,
    categoryType
  }
}

export function getLocalEventsByCategory(categoryType) {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/eventscategories/${category}`)
      .then(res => {
        dispatch(receiveLocalEventsByCategory(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting category information'))
      })
  }
}
