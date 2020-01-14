import {
  REQUEST_SIGNIN,
  // RECEIVE_SIGNIN,
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION
} from '../../../../client/actions/auth/auth'
import auth from '../../../../client/reducers/auth/auth'

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
import '../../../test/client/mocks/api'
import '../../../test/client/mocks/save-auth-token'

import {
  // register,
  // REQUEST_USER_REGISTRATION,
  // RECEIVE_USER_REGISTRATION,
  getAllUsers,
  REQUEST_ALL_USERS,
  RECEIVE_ALL_USERS,
  requestAllUsers,
  receiveAllUsers
} from '../client/actions/auth/auth'

import {CLEAR_ERROR} from '../client/actions/error'

// test('registering a user dispatches the correct actions', () => {
//   const dispatch = jest.fn()
//   return register()(dispatch)
//     .then(() => {
//       expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_USER_REGISTRATION)
//       expect(dispatch.mock.calls[1][0].type).toBe(CLEAR_ERROR)
//       expect(dispatch.mock.calls[2][0].type).toBe(RECEIVE_USER_REGISTRATION)
//       // expect(dispatch.mock.calls[3][0].type).toBe('function')
//     })
// })

test('getAllUsers dispatches the correct actions', () => {
  const dispatch = jest.fn()
  return getAllUsers()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_ALL_USERS)
      expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_ALL_USERS)
      expect(dispatch.mock.calls[2][0].type).toBe(CLEAR_ERROR)
    })
})

test('receiveAllUsers returns correct action', () => {
  const allUsers = [{id: 1}, {id: 2}]
  const expectedAction = {
    type: RECEIVE_ALL_USERS,
    allUsers
  }
  expect(receiveAllUsers(allUsers)).toEqual(expectedAction)
})

test('requestAllUsers returns correct action', () => {
  const expectedAction = {
    type: REQUEST_ALL_USERS
  }
  expect(requestAllUsers()).toEqual(expectedAction)
})
