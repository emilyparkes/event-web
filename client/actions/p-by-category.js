import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_PUBLIC_EVENTS_BY_CATEGORY = 'RECEIVE_PUBLIC_EVENTS_BY_CATEGORY'

export const receivePublicEventsByCategory = (category) => {
  return {
    type: RECEIVE_PUBLIC_EVENTS_BY_CATEGORY,
    category
  }
}

export function getPublicEventsByCategory (category) {
  return (dispatch) => {
    // console.log('get something', `${baseUrl}/api/v1/eventscategories/${category}`)
    request.get(`${baseUrl}/api/v1/eventscategories/${category}`)
      .then(res => {
        // console.log(res.body)
        dispatch(receivePublicEventsByCategory(res.body))
      })
      .catch((e) => {
        // console.log(e.message)
        dispatch(showError('An unexpected error in getting public category information'))
      })
  }
}
