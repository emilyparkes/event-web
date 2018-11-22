/* global test expect */

import {receiveLocalEvents} from '../../../client/actions/local-e/local-events'

test('receiveLocalEvents returns the correct action type', () => {
  const expected = 'RECEIVE_LOCAL_EVENTS'

  const actual = receiveLocalEvents()

  expect(actual.type).toBe(expected)
})

test('receiveLocalEvents returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_LOCAL_EVENTS'
  }

  const actual = receiveLocalEvents()

  expect(actual).toEqual(expected)
})

test('receiveLocalEvents returns the LocalEvents', () => {
  const localEvents = ['Jewellery-Sale', 'Community-Garden-Day']
  const expected = {
    type: 'RECEIVE_LOCAL_EVENTS',
    localEvents: ['Jewellery-Sale', 'Community-Garden-Day']
  }

  const actual = receiveLocalEvents(localEvents)

  expect(actual).toEqual(expected)
})
