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

