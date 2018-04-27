import { combineReducers } from 'redux'
import publicEvents from './public-events'
import localEvents from './local-events'
import {categories, peventsByCategory} from './categories'


export default combineReducers({
  publicEvents,
  localEvents,
  categories,
  peventsByCategory
})
