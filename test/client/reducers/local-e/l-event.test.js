import { RECEIVE_LOCAL_EVENT_BY_NAME } from '../../../../client/actions/local-e/l-event'
import localEvent from '../../../../client/reducers/local-e/l-event'

test('test environment for l-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('localEvent receives the local event', () => {
  const initialState = {}

  const action = {
    type: RECEIVE_LOCAL_EVENT_BY_NAME,
    lEvent: {event: 'test event'}
  }
  const newState = localEvent(initialState, action)
  expect(newState).toBe(action.lEvent)
  
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = localEvent(initialState, action)
  expect(newState).toBe(initialState)
})