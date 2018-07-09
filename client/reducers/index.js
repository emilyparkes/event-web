import { combineReducers } from 'redux'

import auth from './auth'

import categories from './categories'

import localEventsByCategory from './l-by-category'
import lEvent from './l-event'
import localEvents from './local-events'

import publicEventsByCategory from './p-by-category'
import pEvent from './p-event'
import publicEvents from './public-events'

export default combineReducers({
  auth,
  categories,
  localEventsByCategory,
  lEvent,
  localEvents,
  publicEventsByCategory,
  pEvent,
  publicEvents
})
