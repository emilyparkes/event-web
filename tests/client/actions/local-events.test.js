/* global test expect */

import { receiveLocalEvents, receiveLocalEventByName } from '../../../client/actions/local-events'

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

test('receiveLocalEventByName returns the correct action type', () => {
  const expected = 'RECEIVE_LOCAL_EVENT_BY_NAME'

  const actual = receiveLocalEventByName()

  expect(actual.type).toBe(expected)
})

test('receiveLocalEventByName returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_LOCAL_EVENT_BY_NAME'
  }

  const actual = receiveLocalEventByName()

  expect(actual).toEqual(expected)
})

test('receiveLocalEventByName returns the event', () => {
  const lEvent = { id: 5, eventName: 'Jewellery-Sale', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 25 May', location: 'My House', address: '112 road', time: '10am-3pm', ticketInfo: 'Free', ticketUrl: '', website: 'www.sallysells.shop', blurb: 'I am selling jewellery come buy some.', eventType: 2 }
  const expected = {
    type: 'RECEIVE_LOCAL_EVENT_BY_NAME',
    lEvent
  }

  const actual = receiveLocalEventByName(lEvent)

  expect(actual).toEqual(expected)
})
