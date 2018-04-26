import { RECEIVE_LOCAL_EVENTS } from '../actions/local-events'

const initialState = []

const localEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCAL_EVENTS:
      return action.event
    default:
      return state
  }
}

export default localEventsReducer
