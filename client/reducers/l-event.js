import {
  RECEIVE_LOCAL_EVENT_BY_NAME
} from '../actions/l-event'

const initialState = {}

const localEvent = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCAL_EVENT_BY_NAME:
      return action.event
    default:
      return state
  }
}

export default localEvent