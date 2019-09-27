import {
  LOG_OUT,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from '../../actions/auth/auth'
import userDetails from './user-details'

test('test environment for userDetails reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('userDetails returns user details during RECEIVE_USER_DETAILS', () => {
  const currentState = {}
  const action = {
    type: RECEIVE_USER_DETAILS,
    userDetails: {username: 'test username'}
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBe(action.userDetails)
})

test('userDetails returns null during REQUEST_USER_DETAILS', () => {
  const currentState = {username: 'test username'}
  const action = {
    type: REQUEST_USER_DETAILS
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBeNull()
})

test('userDetails returns null during LOG_OUT', () => {
  const currentState = {username: 'test username'}
  const action = {
    type: LOG_OUT
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBeNull()
})

test('activeEvent returns the current state by default', () => {
  const currentState = {username: 'test username'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = userDetails(currentState, action)
  expect(newState).toBe(currentState)
})
