import { combineReducers } from 'redux'

import errorMessage from './error'

import auth from './auth/auth'
import profile from './auth/user-profile'

import friendsList from './notify/friends-list'

import categories from './categories/categories'
import eventsInCategory from './categories/events-by-category'
import eventFromCategory from './categories/event-from-category'

import lEvent from './local-e/l-event'
import localEvents from './local-e/local-events'

import pEvent from './public-e/p-event'
import publicEvents from './public-e/public-events'

export default combineReducers({
  errorMessage,
  auth,
  profile,
  friendsList,
  categories,
  eventsInCategory,
  eventFromCategory,
  lEvent,
  localEvents,
  pEvent,
  publicEvents
})
