import {
  RECEIVE_LOCAL_EVENTS } from '../actions/local-events'

const initialState = []

const localEvents = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCAL_EVENTS:
      return action.localEvents
    default:
      return state
  }
}

export default localEvents
