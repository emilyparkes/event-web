const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUserProfile,
  updateUserProfile
}

function getUserProfile(username, conn) {
  const db = conn || connection
  return db('user_profiles')
    .join('users', 'users.id', '=', 'user_profiles.user_id')
    .select('firstName', 'preferredName', 'surname', 'profilePic', 'bio', 'phone', 'location', 'email', 'username')
    .where('username', username)
    .first()
}

function updateUserProfile(updatedProfile, username, conn) {
  const db = conn || connection
  const { firstName, preferredName, surname, profilePic, phone, bio, location } = updatedProfile
  return db('user_profiles')
    .join('users', 'users.id', '=', 'user_profiles.user_id')
    .select('username', 'firstName', 'preferredName', 'surname', 'profilePic', 'bio', 'phone', 'location')
    // .where('username', username)
    .update({
      firstName: firstName,
      preferredName: preferredName,
      surname: surname,
      profilePic: profilePic,
      bio: bio,
      phone: phone,
      location: location
    })
}
