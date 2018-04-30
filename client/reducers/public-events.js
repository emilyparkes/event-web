import { RECEIVE_PUBLIC_EVENTS, RECEIVE_PUBLIC_EVENT } from '../actions/public-events'

const initialState = []

const publicEvents = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PUBLIC_EVENTS:
      return action.publicEvents
    case RECEIVE_PUBLIC_EVENT:
      return action.event
    default:
      return state
  }
}

export default publicEvents
