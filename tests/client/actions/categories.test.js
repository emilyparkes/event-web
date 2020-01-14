import { receiveCategories, receiveEventFromCategory, receiveEventsByCategory } from '../../../client/actions/categories'

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
  const eventFromCategory = { id: 2, eventName: 'Moon-Festival', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', ticketInfo: 'Free', ticketUrl: '', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.', eventType: 1 }
  const expected = {
    type: 'RECEIVE_EVENT_FROM_CATEGORY',
    eventFromCategory
  }

  const actual = receiveEventFromCategory(eventFromCategory)

  expect(actual).toEqual(expected)
})

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
