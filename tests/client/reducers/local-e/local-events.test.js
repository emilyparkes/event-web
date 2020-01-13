import {RECEIVE_LOCAL_EVENTS} from '../../../../client/actions/local-e/local-events'
import localEvents from '../../../../client/reducers/local-e/local-events'

test('test environment for local events reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('localEvents receives all the local events', () => {
  const initialState = []

  const action = {
    type: RECEIVE_LOCAL_EVENTS,
    localEvents: [{event: 'test event'}]
  }
  const newState = localEvents(initialState, action)
  expect(newState).toBe(action.localEvents)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = localEvents(initialState, action)
  expect(newState).toBe(initialState)
})
