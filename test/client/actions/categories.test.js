/* global test expect */

import { receiveCategories } from '../../../client/actions/categories/categories'

test('receiveCategories returns the correct action type', () => {
  const expected = 'RECEIVE_CATEGORIES'

  const actual = receiveCategories()

  expect(actual.type).toBe(expected)
})

test('receiveCategories returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_CATEGORIES'
  }

  const actual = receiveCategories()

  expect(actual).toEqual(expected)
})

test('receiveCategories returns the list of categories', () => {
  const categories = ['Concerts', 'Gigs', 'Festivals']
  const expected = {
    type: 'RECEIVE_CATEGORIES',
    categories: ['Concerts', 'Gigs', 'Festivals']
  }

  const actual = receiveCategories(categories)

  expect(actual).toEqual(expected)
})