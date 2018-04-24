const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getPublicEventById,
  // getPublicEventByName,
  getPublicEventsByCategoryId,
  getLocalEvents
  // getLocalEventByName,
  // getLocalEventById,
  // getLocalEventsByCategoryId
}

// PUBLIC

function getPublicEvents(conn) {
  const db = conn || connection
  return db('public_events')
    .select()
}

function getPublicEventById(id, conn) {
  const db = conn || connection
  return db('public_events')
    .where('id', id)
    .select('id', 'eventName')
    .first()
}

// function getPublicEventByName(eventName, conn) {
//   const db = conn || connection
//   return db('public_events')
//     .where('public_events.eventName', eventName)
//     .select()
// }

function getPublicEventsByCategoryId(id, conn) {
  const db = conn || connection
  return db('public_events')
    .join('public_events_categories_junction', 'public_events_categories_junction.event_id', 'public_events.id')
    .join('categories', 'public_events_categories_junction.category_id', 'categories.id')
    .where('public_events_categories_junction.category_id', id)
    .select('public_events.eventName')
}

// function getGrants (studyName, testConn) {
//   const conn = testConn || connection
//   return conn('grants')
//     .join('grants_study_junction', 'grants_study_junction.grants_id', 'grants.id')
//     .join('study', 'study.id', 'grants_study_junction.study_id')
//     .where('study.course', studyName)
//     .select()
// }

// function getUserById (id, conn) {
//   const db = conn || connection
//   return db('users')
//     .select('id', 'username')
//     .where('id', id)
//     .first()
// }

// LOCAL

function getLocalEvents(conn) {
  const db = conn || connection
  return db('local_events')
    .select()
}

// function getLocalEventByName(eventName, conn) {
//   const db = conn || connection
//   return db('local_events')
//     .select('eventName')
//     .where('eventName', eventName)
//     .first()
// }

// function getLocalEventById(id, conn) {
//   const db = conn || connection
//   return db('local_events')
//     .select('id', 'eventName')
//     .where('id', id)
//     .first()
// }

// function getLocalEventsByCategoryId(id, conn) {
//   const db = conn || connection
//   return conn('local_events')
//     .join('local_events_categories_junction', 'local_events_categories_junction.event_id', 'events.id')
//     .join('categories', 'categories.category_id', 'categories.id')
//     .where('category_id as categoryId', id)
//     .select('categories.categoryName')
// }
