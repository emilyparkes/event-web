const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getFriendsList,
  getInterestedInList,
  getGoingToList,
  getInvitedToList
}

function getFriendsList (id, conn) {
  const db = conn || connection
  return db('user_friends')
    .join('users', 'users.id', 'friend_id')
    .where('user_id', id)
    .select()
}

function getInterestedInList (id, conn) {
  const db = conn || connection
  return db('user_interestedin_events')
    .join('users', 'users.id', 'user_id')
    .join('events', 'events.id', 'event_id')
    .where('user_id', id)
    .select()
}

function getGoingToList (id, conn) {
  const db = conn || connection
  return db('user_goingto_events')
    .join('users', 'users.id', 'user_id')
    .join('events', 'events.id', 'event_id')
    .where('user_id', id)
    .select()
}

function getInvitedToList (id, conn) {
  const db = conn || connection
  return db('user_invitedto_events')
    .join('users', 'users.id', 'invitee_user_id')
    .join('events', 'events.id', 'event_id')
    .where('users.id', id)
    .select()
}
