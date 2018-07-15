/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test environment is operating correctly', () => {
  expect(true).toBeTruthy()
})

// PUBLIC EVENTS TESTS

test('getPublicEvents returns 4 events', () => {
  const expected = 4
  return db.getPublicEvents(testDb)
    .then(events => {
      expect(events.length).toBe(expected)
    })
})

test('getPublicEventByName returns the event given the name', () => {
  return db.getPublicEventByName('Farmers Market', testDb)
    .then(pEvent => {
      expect(pEvent.eventName).toBe('Farmers Market')
    })
})

test('getPublicEventsByCategory returns the events with the associated category name', () => {
  const expected = [
    { eventName: 'Balu Brigada' },
    { eventName: 'Comedy Fest' }
  ]

  return db.getPublicEventsByCategory('Gig', testDb)
    .then(events => {
      expect(events).toBe(expected)
    })
})

// LOCAL EVENTS TESTS

test('getLocalEvents returns 4 events', () => {
  const expected = 4
  return db.getLocalEvents(testDb)
    .then(events => {
      expect(events.length).toBe(expected)
    })
})

test('getLocalEventByName returns the event given the name', () => {
  return db.getLocalEventByName('Community Garden Day', testDb)
    .then(lEvent => {
      expect(lEvent.eventName).toBe('Community Garden Day')
    })
})

test('getLocalEventsByCategory returns the event name', () => {
  return db.getLocalEventsByCategory('Sports & Outdoors', testDb)
    .then(events => {
      expect(events.eventName).toBe('Hockey Club Opening')
    })
})

// CATEGORIES TEST

test('getCategoryById returns the category given the id', () => {
  return db.getCategoryById(1, testDb)
    .then(category => {
      expect(category.categoryName).toBe('Concerts')
    })
})
