const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFriendsList
}


function getFriendsList(id, conn) {
  const db = conn || connection
  return db('user_friends')
    .join('users', 'users.id', 'friend_id')
    .where('user_id', id)
    .select()
}
