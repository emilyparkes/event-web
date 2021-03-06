import {
  LOG_OUT,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../../actions/auth/auth'

const userDetails = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      return action.userDetails

    case REQUEST_USER_DETAILS:
      return null

    case LOG_OUT:
      return null

    default:
      return state
  }
}

export default userDetails
