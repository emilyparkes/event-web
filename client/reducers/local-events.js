import {
  RECEIVE_LOCAL_EVENTS, RECEIVE_LOCAL_EVENT_BY_NAME } from '../actions/local-events'

const initialState = []

const localEvents = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCAL_EVENTS:
      return action.localEvents
    case RECEIVE_LOCAL_EVENT_BY_NAME:
      return action.event
    default:
      return state
  }
}

export default localEvents
