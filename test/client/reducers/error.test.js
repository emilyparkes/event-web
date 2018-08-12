import {
  SHOW_ERROR,
  CLEAR_ERROR
} from '../../../client/actions/error'
import errorMessage from '../../../client/reducers/error'

test('test environment for db events is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('errorMessage returns the error message during SHOW_ERROR', () => {
  const currentState = ' '
  const action = {
    type: SHOW_ERROR,
    message: 'test error message'
  }
  const newState = errorMessage(currentState, action)
  expect(newState).toBe(action.message)
})

test.skip('errorMessage returns an empty string during CLEAR_ERROR', () => {
  const currentState = 'current error message'
  const action = { type: CLEAR_ERROR }
  const newState = errorMessage(currentState, action)
  expect(newState).toBe('')
})

test('errorMessage returns the current state by default', () => {
  const currentState = ''
  const action = { type: 'UNKNOWN_ACTION_TYPE' }
  const newState = errorMessage(currentState, action)
  expect(newState).toBe(currentState)
})