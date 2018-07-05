import {LOGOUT_SUCCESS} from '../../actions/auth/logout'

import {isAuthenticated, getUserTokenInfo} from '../../lib/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: ''
}

export default function logout (state = initialState, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null
      }
      default:
      return state
  }
}
