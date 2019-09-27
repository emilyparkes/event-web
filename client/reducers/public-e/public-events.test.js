import {RECEIVE_PUBLIC_EVENTS} from '../../actions/public-e/public-events'
import publicEvents from './public-events'

test('test environment for p-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('publicEvents receives the list of public events', () => {
  const initialState = []

  const action = {
    type: RECEIVE_PUBLIC_EVENTS,
    publicEvents: [{event: 'test event'}]
  }
  const newState = publicEvents(initialState, action)
  expect(newState).toBe(action.publicEvents)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = publicEvents(initialState, action)
  expect(newState).toBe(initialState)
})
