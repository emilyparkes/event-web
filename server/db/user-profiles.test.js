/* global expect test beforeEach afterEach */

const env = require('../../test/server/db/test-environment')
const db = require('./user-profiles')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('test environment is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('getUserProfile returns the user profile', () => {
  return db.getUserProfile('emilycoco', testDb)
    .then(profile => {
      const actual = profile.username
      expect(actual).toBe('emilycoco')
    })
})

test('getUserProfile returns a user with the correct AboutMe info', () => {
  return db.getUserProfile('emilycoco', testDb)
    .then(user => {
      expect(user.bio).toBe('I\'m the dev.')
    })
})

// test('updateUserProfile updates the user profile', () => {
//   const updatedProfile = {
//     bio: 'I\'m the dev.',
//     email: 'emilycoco@me.com',
//     firstName: 'emily',
//     location: 'Auckland',
//     phone: '021 555 555',
//     preferredName: 'emsy',
//     profilePic: 'val',
//     surname: 'parkes',
//     username: 'emilycoco'
//   }
//   const expected = {
//     bio: 'I\'m the dev.',
//     email: 'emilycoco@me.com',
//     firstName: 'emily',
//     location: 'Auckland',
//     phone: '021 555 555',
//     preferredName: 'emsy',
//     profilePic: 'val',
//     surname: 'parkes',
//     username: 'emilycoco'
//   }
//   return db.updateUserProfile(updatedProfile, testDb)
//     .then(newprofile => {
//       const actual = newprofile
//       expect(actual).toBe(expected)
//     })
// })
