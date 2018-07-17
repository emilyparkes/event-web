import { RECEIVE_USER_PROFILE, RECEIVE_SAVE_PROFILE} from '../actions/user-profile'

const initialState = {}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.userProfile
    case RECEIVE_SAVE_PROFILE:
      return action.profile
    default:
      return state
  }
}

export default profile
