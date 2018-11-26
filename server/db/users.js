const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const generateHash = require('../auth/hash')

module.exports = {
  createUser,
  getUserById,
  getUserByName,
  updateUser
}

function createUser ({username, password}, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash}))
}

function getUserById (id, conn) {
  const db = conn || connection
  return db('users')
    .select('id', 'username')
    .where('id', id)
    .first()
}

function getUserByName (username, conn) {
  const db = conn || connection
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function updateUser (id, username, currentPassword, newPassword, conn) {
  const db = conn || connection
  return getUserByName(username, db)
    .then(user => {
      if (!user || !generateHash.verify(user.hash, currentPassword)) {
        return Promise.reject(new Error('Username password match not found'))
      }
      return Promise.resolve(user)
    })
    .then(user => {
      const newPasswordHash = generateHash(newPassword)
      if (id !== user.id) Promise.reject(new Error('Username and ID mismatch'))
      return db('users')
        .update({username, hash: newPasswordHash})
        .where('id', user.id)
    })
}
