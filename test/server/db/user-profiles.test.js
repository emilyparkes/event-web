/* global expect test beforeEach afterEach */

const env = require('./test-environment')
const db = require('../../../server/db/user-profiles')

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
  const expected = {
    bio: 'I\'m the dev.',
    email: 'emilycoco@me.com',
    firstName: 'emily',
    location: 'Auckland',
    phone: '021 555 555',
    preferredName: 'em',
    profilePic: 'val',
    surname: 'parkes',
    username: 'emilycoco'
  }
  return db.getUserProfile('emilycoco', testDb)
    .then(profile => {
      const actual = profile
      expect(actual).toEqual(expected)
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
