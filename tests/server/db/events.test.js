/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/events')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test environment for db events is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('getPublicEvents returns 4 public events', () => {
  return db.getPublicEvents(testDb)
    .then(pEvents => {
      expect(pEvents.length).toBe(4)
    })
})

test('getPublicEventByName returns the named public event', () => {
  const expected = 'Moon-Festival'
  return db.getPublicEventByName('Moon-Festival', testDb)
    .then(pEvent => {
      const actual = pEvent.eventName
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getEventsByCategory returns all events in the named category', () => {
  const expected = [{'access': 'Online Tickets and Door Sales Available', 'categoryName': 'Gigs', 'category_id': 2, 'date_end': '2018-10-05', 'date_start': '2018-10-05', 'description': 'Balu Brigada is playing and you should hear them!', 'eventName': 'Balu-Brigada', 'eventType': '1', 'event_id': 3, 'id': 2, 'image': 'http://lorempixel.com/400/200', 'restrictions': 'R18', 'tickets': 'http://www1.ticketmaster.co.nz/?beta=1', 'time_end': '23:30:00', 'time_start': '08:00:00'}, {'access': 'Online Tickets', 'categoryName': 'Gigs', 'category_id': 2, 'date_end': '2018-09-25', 'date_start': '2018-09-25', 'description': 'Come laugh at funny people telling funny stories.', 'eventName': 'Comedy-Fest', 'eventType': '1', 'event_id': 4, 'id': 2, 'image': 'http://lorempixel.com/400/200', 'restrictions': 'R21', 'tickets': 'http://www1.ticketmaster.co.nz/?beta=1', 'time_end': '24:00:00', 'time_start': '15:30:00'}]
  return db.getEventsByCategory('Gigs', testDb)
    .then(events => {
      const actual = events
      expect(actual).toEqual(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getLocalEvents returns 4 local events', () => {
  return db.getLocalEvents(testDb)
    .then(lEvents => {
      expect(lEvents.length).toBe(4)
    })
})

test('getLocalEventByName returns the named local event', () => {
  const expected = 'Jewellery-Sale'
  return db.getLocalEventByName('Jewellery-Sale', testDb)
    .then(lEvent => {
      const actual = lEvent.eventName
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getCategories returns the 10 categories', () => {
  return db.getCategories(testDb)
    .then(categories => {
      expect(categories.length).toBe(10)
    })
})

// test('getCategoryById returns the category based on the id', () => {
//   return db.getCategoryById(testDb)

// })

test('getCategoryByName returns the named category', () => {
  const expected = 'Gigs'
  return db.getCategoryByName('Gigs', testDb)
    .then(category => {
      const actual = category.categoryName
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getEventFromCategory returns one event from the category', () => {
  const expected = 'Balu-Brigada'
  return db.getEventFromCategory('Gigs', 'Balu-Brigada', testDb)
    .then(event => {
      const actual = event.eventName
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
