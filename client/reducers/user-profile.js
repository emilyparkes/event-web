import { RECEIVE_USER_PROFILE, RECEIVE_SAVE_PROFILE } from '../actions/user-profile'

const initialState = {
  firstName: '',
  surname: '',
  preferredName: '',
  profilePic: '',
  bio: '',
  phone: '',
  location: ''
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.userProfile
    case RECEIVE_SAVE_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}

export default profile
