import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_EVENT_FROM_CATEGORY = 'RECEIVE_EVENT_FROM_CATEGORY'
export const RECEIVE_EVENTS_BY_CATEGORY = 'RECEIVE_EVENTS_BY_CATEGORY'

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export function getCategories () {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/categories`)
      .then(res => {
        dispatch(receiveCategories(res.body.categories))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting category information'))
      })
  }
}

export const receiveEventsByCategory = (eventsInCategory) => {
  return {
    type: RECEIVE_EVENTS_BY_CATEGORY,
    eventsInCategory
  }
}

export function getEventsByCategory (category) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/categories/${category}`)
      .then(res => {
        dispatch(receiveEventsByCategory(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export const receiveEventFromCategory = (eventFromCategory) => {
  return {
    type: RECEIVE_EVENT_FROM_CATEGORY,
    eventFromCategory
  }
}

export function getEventFromCategory (category, eventName) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/categories/${category}/${eventName}`)
      .then(res => {
        dispatch(receiveEventFromCategory(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
