/* global test expect */

import { receiveEventsByCategory } from '../../../client/actions/categories/events-by-category'

test('receiveEventsBycategory returns the correct action type', () => {
  const expected = 'RECEIVE_EVENTS_BY_CATEGORY'

  const actual = receiveEventsByCategory()

  expect(actual.type).toBe(expected)
})

test('receiveEventsBycategory returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_EVENTS_BY_CATEGORY'
  }

  const actual = receiveEventsByCategory()

  expect(actual).toEqual(expected)
})

test('receiveEventsBycategory returns the events from the selected category', () => {
  const eventsInCategory = []
  const expected = {
    type: 'RECEIVE_EVENTS_BY_CATEGORY',
    eventsInCategory
  }

  const actual = receiveEventsByCategory(eventsInCategory)

  expect(actual).toEqual(expected)
})
