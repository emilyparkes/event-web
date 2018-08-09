import { 
  RECEIVE_PUBLIC_EVENT_BY_NAME } from '../../actions/public-e/p-event'

const initialState = {}

const publicEvent = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PUBLIC_EVENT_BY_NAME:
      return action.publicEvent
    default:
      return state
  }
}

export default publicEvent
