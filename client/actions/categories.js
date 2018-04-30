import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_PUBLIC_EVENTS_BY_CATEGORY = 'RECEIVE_PUBLIC_EVENTS_BY_CATEGORY'

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function getCategories () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/eventcategories`)
      .then(res => {
        dispatch(receiveCategories(res.body.categories))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting category information'))
      })
  }
}

export const receivePublicEventsByCategory = (peventsbycategory) => {
  return {
    type: RECEIVE_PUBLIC_EVENTS_BY_CATEGORY,
    peventsbycategory
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
