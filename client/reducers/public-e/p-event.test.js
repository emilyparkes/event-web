import {RECEIVE_PUBLIC_EVENT_BY_NAME} from '../../actions/public-e/p-event'
import publicEvent from './p-event'

test('test environment for p-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('publicEvent receives the public event', () => {
  const initialState = {}

  const action = {
    type: RECEIVE_PUBLIC_EVENT_BY_NAME,
    publicEvent: {event: 'test event'}
  }
  const newState = publicEvent(initialState, action)
  expect(newState).toBe(action.publicEvent)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = publicEvent(initialState, action)
  expect(newState).toBe(initialState)
})
