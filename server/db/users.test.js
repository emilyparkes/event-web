/* global expect test beforeEach afterEach */

const env = require('../../test/server/db/test-environment')
const db = require('./users')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

// test('createUser creates a new user', () => {
//   const username = 'iamnew'
//   const validateNewUser = newUser => {
//     expect(newUser.username).toBe(username)
//   }
//   return db.createUser(username, 'andnottoosecure', testDb)
//     .then(validateNewUser)
// })

// test('createUser fails if username already exists', () => {
//   const createNewUser = () => {
//     return db.createUser('iamnew', 'password', testDb)
//   }
//   return createNewUser()
//     .then(() => expect(createNewUser()).rejects.toBeDefined())
// })
// test('userExists returns true for an existing username', () => {
//   return db.userExists('jules', testDb)
//     .then(exists => {
//       expect(exists).toBeTruthy()
//     })
// })

// test('userExists returns false for a nonexistent username', () => {
//   return db.userExists('nonexist', testDb)
//     .then(exists => {
//       expect(exists).toBeFalsy()
//     })
// })

test('getUserById returns a user given their id', () => {
  return db.getUserById(1, testDb)
    .then(user => {
      expect(user.username).toBe('emilycoco')
    })
})

test('getUserById returns undefined for a nonexistent user id', () => {
  return db.getUserById(9999, testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})

test('getUserByName returns a user given their username', () => {
  return db.getUserByName('emilycoco', testDb)
    .then(user => {
      expect(user.id).toBe(1)
    })
})

test('getUserByName returns undefined for a nonexistent username', () => {
  return db.getUserByName('nonexist', testDb)
    .then(user => {
      expect(user).toBeFalsy()
    })
})
