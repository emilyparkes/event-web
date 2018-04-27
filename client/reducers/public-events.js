import { RECEIVE_PUBLIC_EVENTS } from '../actions/public-events'

const initialState = []

const publicEvents = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PUBLIC_EVENTS:
      return action.publicEvents
    default:
      return state
  }
}

export default publicEvents
