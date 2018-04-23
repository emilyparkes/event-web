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

test('getPublicEvents returns 4 events', () => {
  const expected = 4
  return db.getPublicEvents(testDb)
    .then(events => {
      expect(events.length).toBe(expected)
    })
})

test('getLocalEvents returns 4 events', () => {
  const expected = 4
  return db.getLocalEvents(testDb)
    .then(events => {
      expect(events.length).toBe(expected)
    })
})

test('getPublicEventById returns the event id 1', () => {
  return db.getPublicEventById(1, testDb)
    .then(events => {
      expect(events.id).toBe(1)
    })
})

test('getLocalEventById returns the event id 2', () => {
  return db.getLocalEventById(2, testDb)
    .then(event => {
      expect(event.id).toBe(2)
    })
})

test('getPublicEventByName returns the event name', () => {
  return db.getPublicEventByName('Farmers Market', testDb)
    .then(event => {
      expect(event.eventName).toBe('Farmers Market')
    })
})

test('getLocalEventByName returns the event name', () => {
  return db.getLocalEventByName('Jewellery Sale', testDb)
    .then(event => {
      expect(event.eventName).toBe('Jewellery Sale')
    })
})

test('getPublicEventsByCategoryId returns the event id 1', () => {
  const expected = 1
  return db.getPublicEventsByCategoryId(testDb)
    .then(eventId => {
      expect(eventId).toBe(expected)
    })
})

test('getLocalEventsByCategoryId returns the event id 2', () => {
  const expected = 2
  return db.getLocalEventsByCategoryId(testDb)
    .then(eventId => {
      expect(eventId).toBe(expected)
    })
})
  