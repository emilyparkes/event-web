/* global test expect */

import { receiveEventFromCategory } from '../../../client/actions/categories/event-from-category'

test('receiveEventFromcategory returns the correct action type', () => {
  const expected = 'RECEIVE_EVENT_FROM_CATEGORY'

  const actual = receiveEventFromCategory()

  expect(actual.type).toBe(expected)
})

test('receiveEventFromcategory returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_EVENT_FROM_CATEGORY'
  }

  const actual = receiveEventFromCategory()

  expect(actual).toEqual(expected)
})

test('receiveEventFromcategory returns the event from selected category', () => {
  const eventFromCategory = {id: 2, eventName: 'Moon-Festival', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', ticketInfo: 'Free', ticketUrl: '', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.' ,  eventType: 1}
  const expected = {
    type: 'RECEIVE_EVENT_FROM_CATEGORY',
    eventFromCategory
  }

  const actual = receiveEventFromCategory(eventFromCategory)

  expect(actual).toEqual(expected)
})
