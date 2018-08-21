import { 
  RECEIVE_API} from '../actions/ticketmaster'

const initialState = []

const ticketmaster = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API:
      return action.events

    default:
      return state
  }
}

export default ticketmaster