/* global test expect */

import { receivePublicEventByName } from '../../../client/actions/public-e/p-event'

test('receivePublicEventByName returns the correct action type', () => {
  const expected = 'RECEIVE_PUBLIC_EVENT_BY_NAME'

  const actual = receivePublicEventByName()

  expect(actual.type).toBe(expected)
})

test('receivePublicEventByName returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_PUBLIC_EVENT_BY_NAME'
  }

  const actual = receivePublicEventByName()

  expect(actual).toEqual(expected)
})

test('receivePublicEventByName returns the event', () => {
  const publicEvent = {id: 2, eventName: 'Moon-Festival', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', ticketInfo: 'Free', ticketUrl: '', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.' ,  eventType: 1}
  const expected = {
    type: 'RECEIVE_PUBLIC_EVENT_BY_NAME',
    publicEvent
  }

  const actual = receivePublicEventByName(publicEvent)

  expect(actual).toEqual(expected)
})