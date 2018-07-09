const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser(displayname, email, username, password, conn) {
  const passwordHash = hash.generate(password)
  const db = conn || connection
  return db('users')
    .insert({ displayname, email, username, hash: passwordHash })
}

function userExists(email, username, conn) {
  const db = conn || connection
  return db('users')
    .count('id')
    .where('email', email)
    .where('username', username)
    .then(count => {
      return count[0].id > 0
    })
}

function getUserByName(username, conn) {
  const db = conn || connection
  return db('users')
    .select()
    .where('username', username)
    .first()
}
