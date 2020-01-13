import {RECEIVE_INTERESTED_IN_LIST} from '../../../../client/actions/notify/interested-in'
import interestedIn from '../../../../client/reducers/notify/interested-in'

test('test environment for p-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('interestedIn receives the list of events the user is interested in', () => {
  const initialState = []

  const action = {
    type: RECEIVE_INTERESTED_IN_LIST,
    interestedIn: [{event: 'test event'}]
  }
  const newState = interestedIn(initialState, action)
  expect(newState).toBe(action.interestedIn)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = interestedIn(initialState, action)
  expect(newState).toBe(initialState)
})
