const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUserProfile,
  updateUserProfile
}

function getUserProfile(userId, conn) {
  const db = conn || connection
  return db('user_profiles')
    .select()
    // 'firstName', 'preferredName', 'surname', 'profilePic', 'bio', 'phone', 'location'
    .where('user_id', userId)
    .first()
}

function updateUserProfile(userId, conn) {
  const db = conn || connection
  return db('user_profiles')
    .select()
    .where('user_id', userId)
    .update({
      firstName,
      preferredName,
      surname,
      profilePic,
      bio,
      phone,
      location
    })
}
