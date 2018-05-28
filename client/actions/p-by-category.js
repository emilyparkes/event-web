import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_PUBLIC_EVENTS_BY_CATEGORY = 'RECEIVE_PUBLIC_EVENTS_BY_CATEGORY'

export const receivePublicEventsByCategory = (categoryType) => {
  return {
    type: RECEIVE_PUBLIC_EVENTS_BY_CATEGORY,
    categoryType
  }
}

export function getPublicEventsByCategory (category) {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/eventscategories/${category}`)
      .then(res => {
        dispatch(receivePublicEventsByCategory(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting category information'))
      })
  }
}
