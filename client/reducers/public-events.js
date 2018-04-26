import { RECEIVE_PUBLIC_EVENTS } from '../actions/public-events'

const initialState = []

const publicEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PUBLIC_EVENTS:
      return action.publicevents
    default:
      return state
  }
}

export default publicEventsReducer
