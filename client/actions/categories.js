import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

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
