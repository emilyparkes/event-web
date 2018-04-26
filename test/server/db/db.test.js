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

test('getPublicEventById returns the event given the id', () => {
  return db.getPublicEventById(1, testDb)
    .then(event => {
      expect(event.eventName).toBe('Farmers Market')
    })
})

test('getPublicEventsByCategoryId returns the events with the associated category name', () => {
  const expected = (
    'Balu Brigada', 
    'Comedy Fest'
  )
  return db.getPublicEventsByCategoryId(2, testDb)
    .then(events => {
      expect(events.categoryName).toBe(expected)
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

test('getLocalEventsById returns the event given the id', () => {
  return db.getLocalEventById(2, testDb)
    .then(events => {
      expect(events.eventName).toBe('Community Garden Day')
    })
})

test('getLocalEventsByCategoryId returns the event category name', () => {
  return db.getLocalEventsByCategoryId(10, testDb)
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
