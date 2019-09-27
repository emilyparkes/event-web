import {
  REQUEST_SIGNIN,
  // RECEIVE_SIGNIN,
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION
} from '../../actions/auth/auth'
import auth from './auth'

test('test environment for categories reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('auth returns true during REQUEST_USER_REGISTRATION', () => {
  const currentState = false
  const action = {
    type: REQUEST_USER_REGISTRATION
  }
  const newState = auth(currentState, action)
  expect(newState).toBe(true)
})

test('auth returns false during RECEIVE_USER_REGISTRATION', () => {
  const currentState = true
  const action = {
    type: RECEIVE_USER_REGISTRATION
  }
  const newState = auth(currentState, action)
  expect(newState).toBe(false)
})

test('auth returns true during REQUEST_SIGNIN', () => {
  const currentState = true
  const action = {
    type: REQUEST_SIGNIN
  }
  const newState = auth(currentState, action)
  expect(newState).toBe(true)
})

// test('auth returns false during RECEIVE_SIGNIN', () => {
//   const currentState = false
//   const action = {
//     type: RECEIVE_SIGNIN
//   }
//   const newState = auth(currentState, action)
//   expect(newState).toBe(false)
// })
