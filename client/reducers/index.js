import {combineReducers} from 'redux'
import publicEventsReducer from './public-events'
import localEventsReducer from './local-events'

export default combineReducers({
  publicEventsReducer,
  localEventsReducer
})
