/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

// afterEach(() => env.cleanup(testDb))

test('test environment is operating correctly', () => {
  expect(true).toBeTruthy()
})
// //
// const env = require('./test-environment')
// const db = require('../db')

// let testDb = null

// beforeEach(() => {
//   testDb = env.getTestDb()
//   return env.initialise(testDb)
// })

// afterEach(() => {
//   env.cleanup(testDb)
// })

// test('test environment is operating correctly', () => {
//   expect(true).toBeTruthy()
// })
// //

// test('getDriverVehicles returns 5 drivers', () => {
//   const expected = 5
//   return db.getDriverVehicles(testDb)
//     .then(drivers => {
//       expect(drivers.length).toBe(expected)
//     })
// })

test('getPublicEvents returns 3 events', () => {
  const expected = 3
  return db.getPublicEvents(testDb)
    .then(events => {
      expect(events.length).toBe(expected)
    })
})

// test('getLocalEvents returns 3 events', () => {
//   const expected = 3
//   return db.getLocalEvents(testDb)
//     .then(events => {
//       expect(events.length).toBe(expected)
//     })
// })

test('getPublicEventByName returns the event name "rowValue1"', () => {
  const expected = 'rowValue1'
  return db.getPublicEventByName(testDb)
    .then(event => {
      expect(event).toBe(expected)
    })
})

// test('getLocalEventByName returns the event name', () => {
//   const expected = ''
//   return db.getLocalEventByName(testDb)
//     .then(event => {
//       expect(event).toBe(expected)
//     })
// })

test('getPublicEventsByCategoryId returns the event id 1', () => {
  const expected = 1
  return db.getPublicEventsByCategoryId(testDb)
    .then(eventId => {
      expect(eventId).toBe(expected)
    })
})

// test('getLocalEventsByCategoryId returns the event id 2', () => {
//   const expected = 2
//   return db.getLocalEventsByCategoryId(testDb)
//     .then(eventId => {
//       expect(eventId).toBe(expected)
//     })
// })
  
  
 
  