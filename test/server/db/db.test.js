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

// Public

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

// test('getPublicEventsByName returns the event name', () => {
//   return db.getPublicEvents('Farmers Market', testDb)
//     .then(events => {
//       expect(events.eventName).toBe('Farmers Market')
//     })
// })

test('getPublicEventsByCategoryId returns the events with the associated category name', () => {
  const expected = 
    ('Balu Brigada' , 
    'Comedy Fest')
  
  return db.getPublicEventsByCategoryId(2, testDb)
    .then(events => {
      expect(events.categoryName).toBe(expected)
    })
})

// Local

test('getLocalEvents returns 4 events', () => {
  const expected = 4
  return db.getLocalEvents(testDb)
    .then(events => {
      expect(events.length).toBe(expected)
    })
})

// test('getLocalEventsByName returns the event name', () => {
//   return db.getLocalEventsByName('Jewellery Sale', testDb)
//     .then(events => {
//       expect(events.eventName).toBe('Jewellery Sale')
//     })
// })

// test('getLocalEventsById returns the event id', () => {
//   return db.getLocalEventsById(2, testDb)
//     .then(events => {
//       expect(events.id).toBe(2)
//     })
// })

// test('getLocalEventsByCategoryId returns the event category name', () => {
//   return db.getLocalEventsByCategoryId(1, testDb)
//     .then(categories => {
//       expect(categories.categoryName).toBe('Concert')
//     })
// })

// //
// test('getUserById returns a user given their id', () => {
//   return db.getUserById(1, testDb)
//     .then(user => {
//       expect(user.username).toBe('jules')
//     })
// })
