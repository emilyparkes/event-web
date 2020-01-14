import {RECEIVE_GOING_TO_LIST} from '../../actions/notify/going-to'
import goingTo from '../../../client/reducers/notify/going-to'

test('test environment for p-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('goingTo receives the list of events the user is going to', () => {
  const initialState = []

  const action = {
    type: RECEIVE_GOING_TO_LIST,
    goingTo: [{event: 'test event'}]
  }
  const newState = goingTo(initialState, action)
  expect(newState).toBe(action.goingTo)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = goingTo(initialState, action)
  expect(newState).toBe(initialState)
})
