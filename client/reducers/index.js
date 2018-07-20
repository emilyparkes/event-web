import { combineReducers } from 'redux'

import auth from './auth'
import errorMessage from './error'

import profile from './user-profile'

import categories from './categories'
import eventsInCategory from './events-by-category'

import lEvent from './l-event'
import localEvents from './local-events'

import pEvent from './p-event'
import publicEvents from './public-events'

export default combineReducers({
  auth,
  errorMessage,
  profile,
  categories,
  eventsInCategory,
  lEvent,
  localEvents,
  pEvent,
  publicEvents
})
