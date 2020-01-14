import { SHOW_ERROR } from '../../actions/error'
import {
  REQUEST_LOG_OUT,
  RECEIVE_LOG_OUT,
  REQUEST_SIGNIN,
  RECEIVE_SIGNIN,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS,
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION
} from '../../actions/auth/auth'
import { getUserToken } from '../../lib/auth'

const initialState = {
  // isFetching: false,
  isAuthenticated: false,
  // isAuthenticated(),
  user: getUserToken(),
  errorMessage: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_REGISTRATION:
      return true

    case RECEIVE_USER_REGISTRATION:
      return false

    case REQUEST_SIGNIN:
      return true

    case RECEIVE_SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }

    case REQUEST_USER_DETAILS:
      return true

    case RECEIVE_USER_DETAILS:
      return {
        ...state
      }

    case REQUEST_LOG_OUT:
      return true

    case RECEIVE_LOG_OUT:
      return {
        ...state,
        user: null
      }

    case SHOW_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage
      }

    default:
      return state
  }
}

export default auth
