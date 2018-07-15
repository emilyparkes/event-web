import { RECEIVE_PUBLIC_EVENT } from '../actions/p-event'

const initialState = []

const publicEvent = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PUBLIC_EVENT:
      return action.event
    default:
      return state
  }
}

export default publicEvent