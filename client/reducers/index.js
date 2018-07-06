import { combineReducers } from 'redux'

import register from './auth/register'
import login from './auth/login'
import logout from './auth/logout'

import categories from './categories'

import localEventsByCategory from './l-by-category'
import lEvent from './l-event'
import localEvents from './local-events'

import publicEventsByCategory from './p-by-category'
import pEvent from './p-event'
import publicEvents from './public-events'

export default combineReducers({
  register,
  login,
  logout,
  categories,
  localEventsByCategory,
  lEvent,
  localEvents,
  publicEventsByCategory,
  pEvent,
  publicEvents
})
