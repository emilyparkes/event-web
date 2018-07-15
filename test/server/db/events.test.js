/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/events')

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

test.skip('getPublicEventByName returns the event given the name', () => {
  return db.getPublicEventByName('Farmers Market', testDb)
    .then(pEvent => {
      expect(pEvent.eventName).toBe('Farmers Market')
    })
})

test.skip('getPublicEventsByCategory returns the events with the associated category name', () => {
  return db.getPublicEventsByCategory('Gig', testDb)
    .then(events => {
      expect(events).toBe(2)
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

test.skip('getLocalEventByName returns the event given the name', () => {
  return db.getLocalEventByName('Community Garden Day', testDb)
    .then(lEvent => {
      expect(lEvent.eventName).toBe('Community Garden Day')
    })
})

test.skip('getLocalEventsByCategory returns the categorys assosiated events', () => {
  return db.getLocalEventsByCategory('Sports & Outdoors', testDb)
    .then(lEvents => {
      expect(lEvents.length).toBe(2)
    })
})

// function getLocationStockByLocationId (locationId, testDb) {
//   const connection = testDb || knex
//   return connection('location_stock')
//     .join('stock', 'location_stock.item_id', 'stock.id')
//     .where('location_id', locationId)
//     .select('location_stock.id as locationStockId', 'stock.id as stockId', 'location_stock.location_id', 'stock.item', 'location_stock.quantity')
// }

// test('getLocationStockByLocationId returns a locations items', () => {
//   return stock.getLocationStockByLocationId(1, testDb)
//     .then(location => {
//       expect(location[0].quantity).toBe(30)
//     })
// })

// CATEGORIES TEST

test.skip('getCategoryById returns the category given the id', () => {
  return db.getCategoryById(1, testDb)
    .then(category => {
      expect(category.categoryName).toBe('Concerts')
    })
})
