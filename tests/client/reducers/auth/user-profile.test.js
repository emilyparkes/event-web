import {
  RECEIVE_USER_PROFILE
} from '../../../../client/actions/auth/user-profile'
import profile from '../../../../client/reducers/auth/user-profile'

test('test environment for profile reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('profile receives the user profile', () => {
  const initialState = {}
  const action = {
    type: RECEIVE_USER_PROFILE,
    userProfile: {firstname: 'test name'}
  }
  const newState = profile(initialState, action)
  expect(newState).toBe(action.userProfile)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test name'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = profile(initialState, action)
  expect(newState).toBe(initialState)
})
