import { 
  RECEIVE_API} from '../actions/eventfinda'

const initialState = []

const eventfinda = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API:
      return action.events

    default:
      return state
  }
}

export default eventfinda