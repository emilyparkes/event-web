import {RECEIVE_CATEGORIES} from '../../actions/categories/categories'
import categories from '../../../client/reducers/categories/categories'

test('test environment for categories reducer is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('categories receives the list of categories', () => {
  const initialState = []

  const action = {
    type: RECEIVE_CATEGORIES,
    categories: [{category: 'test category'}]
  }
  const newState = categories(initialState, action)
  expect(newState).toBe(action.categories)
})

test('activeEvent returns the current state by default', () => {
  const initialState = {name: 'test name'}
  const action = {
    type: 'UNKNOWN_ACTION_TYPE'
  }
  const newState = categories(initialState, action)
  expect(newState).toBe(initialState)
})
