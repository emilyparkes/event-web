import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_PEVENTS_BY_CATEGORIES = 'RECEIVE_PEVENTS_BY_CATEGORIES'

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function getCategories () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/categories`)
      .then(res => {
        dispatch(receiveCategories(res.body.categories))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting category information'))
      })
  }
}

export const receivePEventsByCategories = (pEventsByCategory) => {
  return {
    type: RECEIVE_PEVENTS_BY_CATEGORIES,
    pEventsByCategory
  }
}

export function getPEventsByCategory () {
  return (dispatch) => {
    request('get', `${baseUrl}/api/v1/categories`)
      .then(res => {
        dispatch(receivePEventsByCategories(res.body.pEventsByCategory))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting category information'))
      })
  }
}