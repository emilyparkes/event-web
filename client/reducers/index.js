import { combineReducers } from 'redux'

import errorMessage from './error'
import ticketmaster from './ticketmaster'
import newEvent from './create-event'

import auth from './auth/auth'
import profile from './auth/user-profile'

import friendsList from './notify/friends-list'
import interestedIn from './notify/interested-in'
import goingTo from './notify/going-to'
import invitedTo from './notify/invited-to'

import categories from './categories/categories'
import eventsInCategory from './categories/events-by-category'
import eventFromCategory from './categories/event-from-category'

import lEvent from './local-e/l-event'
import localEvents from './local-e/local-events'

import publicEvent from './public-e/p-event'
import publicEvents from './public-e/public-events'

export default combineReducers({
  errorMessage,
  ticketmaster,
  newEvent,
  auth,
  profile,
  friendsList,
  interestedIn,
  goingTo,
  invitedTo,
  categories,
  eventsInCategory,
  eventFromCategory,
  lEvent,
  localEvents,
  publicEvent,
  publicEvents
})
