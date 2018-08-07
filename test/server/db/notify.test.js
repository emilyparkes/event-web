/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/notify')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test environment is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('getFriendsList returns 2 friends for the first user', () => {
  return db.getFriendsList(1, testDb)
    .then(friends => {
      expect(friends.length).toBe(2)
    })
})

test('getInterestedInList returns 3 events for the first user', () => {
  return db.getInterestedInList(1, testDb)
    .then(events => {
      expect(events.length).toBe(3)
    })
})

test('getGoingToList returns 3 events for the first user', () => {
  return db.getGoingToList(1, testDb)
    .then(events => {
      expect(events.length).toBe(3)
    })
})

test('getInvitedToList returns 3 events for the first user', () => {
  return db.getInvitedToList(1, testDb)
    .then(pEvents => {
      expect(pEvents.length).toBe(3)
    })
})