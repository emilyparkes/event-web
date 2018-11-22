import {
  RECEIVE_INVITED_TO_LIST} from '../../actions/notify/invited-to'

const initialState = []

const invitedTo = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INVITED_TO_LIST:
      return action.invitedTo
    default:
      return state
  }
}

export default invitedTo
