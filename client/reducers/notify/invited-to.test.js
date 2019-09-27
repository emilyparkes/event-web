import {RECEIVE_INVITED_TO_LIST} from '../../actions/notify/invited-to'
import invitedTo from './invited-to'

test('test environment for p-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('invitedTo receives the list of events the user is interested in', () => {
  const initialState = []

  const action = {
    type: RECEIVE_INVITED_TO_LIST,
    invitedTo: [{event: 'test event'}]
  }
  const newState = invitedTo(initialState, action)
  expect(newState).toBe(action.invitedTo)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = invitedTo(initialState, action)
  expect(newState).toBe(initialState)
})
