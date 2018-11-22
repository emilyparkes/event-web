import {
  RECEIVE_INTERESTED_IN_LIST} from '../../actions/notify/interested-in'

const initialState = []

const interestedIn = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_INTERESTED_IN_LIST:
      return action.interestedIn
    default:
      return state
  }
}

export default interestedIn
