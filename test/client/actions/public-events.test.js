/* global test expect */

import { receivePublicEvents } from '../../../client/actions/public-events'

test('receivePublicEvents returns the correct action type', () => {
  const expected = 'RECEIVE_PUBLIC_EVENTS'

  const actual = receivePublicEvents()

  expect(actual.type).toBe(expected)
})

test('receivePublicEvents returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_PUBLIC_EVENTS'
  }

  const actual = receivePublicEvents()

  expect(actual).toEqual(expected)
})

test('receivePublicEvents returns the public events', () => {
  const publicEvents = ['Farmers-Market', 'Moon-Festival']
  const expected = {
    type: 'RECEIVE_PUBLIC_EVENTS',
    publicEvents: ['Farmers-Market', 'Moon-Festival']
  }

  const actual = receivePublicEvents(publicEvents)

  expect(actual).toEqual(expected)
})