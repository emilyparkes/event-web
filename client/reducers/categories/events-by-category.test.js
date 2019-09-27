import {RECEIVE_EVENTS_BY_CATEGORY} from '../../actions/categories/events-by-category'
import eventsInCategory from './events-by-category'

test('test environment for eventsInCategory reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('eventsInCategory receives the list of events in the category', () => {
  const initialState = []

  const action = {
    type: RECEIVE_EVENTS_BY_CATEGORY,
    eventsInCategory: [{event: 'test event'}]
  }
  const newState = eventsInCategory(initialState, action)
  expect(newState).toBe(action.eventsInCategory)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test name'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = eventsInCategory(initialState, action)
  expect(newState).toBe(initialState)
})
