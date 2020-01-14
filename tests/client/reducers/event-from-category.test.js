import {RECEIVE_EVENT_FROM_CATEGORY} from '../../actions/categories/event-from-category'
import eventFromCategory from '../../../client/reducers/categories/event-from-category'

test('test environment for eventFromCategory reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('eventFromCategory receives the event from a category', () => {
  const initialState = {}

  const action = {
    type: RECEIVE_EVENT_FROM_CATEGORY,
    eventFromCategory: {event: 'test event'}
  }
  const newState = eventFromCategory(initialState, action)
  expect(newState).toBe(action.eventFromCategory)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test name'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = eventFromCategory(initialState, action)
  expect(newState).toBe(initialState)
})
