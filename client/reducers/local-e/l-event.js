import { RECEIVE_LOCAL_EVENT_BY_NAME } from '../../actions/local-events'

const initialState = {}

const localEvent = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCAL_EVENT_BY_NAME:
      return action.lEvent
    default:
      return state
  }
}

export default localEvent
