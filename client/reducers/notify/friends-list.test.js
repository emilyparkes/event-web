import {RECEIVE_FRIENDS_LIST} from '../../actions/notify/friends-list'
import friendsList from './friends-list'

test('test environment for p-event reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('friendsList receives the list of friends', () => {
  const initialState = []

  const action = {
    type: RECEIVE_FRIENDS_LIST,
    friendsList: [{event: 'test event'}]
  }
  const newState = friendsList(initialState, action)
  expect(newState).toBe(action.friendsList)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test event'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = friendsList(initialState, action)
  expect(newState).toBe(initialState)
})
