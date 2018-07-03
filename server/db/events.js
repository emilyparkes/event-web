const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getPublicEventByName,
  getPublicEventsByCategory,
  getLocalEvents,
  getLocalEventByName,
  getLocalEventsByCategory,
  getCategories,
  getCategoryById,
  getCategoryByName
}

// PUBLIC EVENTS FUNCTIONS

function getPublicEvents(conn) {
  const db = conn || connection
  return db('public_events')
    .select()
}

// function getPublicEventById(id, conn) {
//   const db = conn || connection
//   return db('public_events')
//     .where('id', id)
//     .select('id', 'eventName', 'date', 'location',
//      'address', 'time', 'tickets', 'website', 'blurb')
//     .first()
// }

function getPublicEventByName(eventName, conn) {
  const db = conn || connection
  return db('public_events')
    .where('eventName', eventName)
    .select('id', 'eventName', 'date', 'location',
      'address', 'time', 'tickets', 'website', 'blurb')
    .first()
}

function getPublicEventsByCategory(category, conn) {
  const db = conn || connection
  return db('categories')
    .join('public_events_categories_junction', 'public_events_categories_junction.category_id', '=', 'categories.id')
    .join('public_events', 'public_events.id', '=', 'public_events_categories_junction.event_id')
    .where('categories.categoryName', category)
    .select()
}

// LOCAL EVENTS FUNCTIONS

function getLocalEvents(conn) {
  const db = conn || connection
  return db('local_events')
    .select()
}

// function getLocalEventById(id, conn) {
//   const db = conn || connection
//   return db('local_events')
//     .where('id', id)
//     .select('id', 'eventName')
//     .first()
// }

function getLocalEventByName(eventName, conn) {
  const db = conn || connection
  return db('local_events')
    .where('eventName', eventName)
    .select('id', 'eventName', 'date', 'location',
      'address', 'time', 'tickets', 'website', 'blurb')
    .first()
}

function getLocalEventsByCategory(category, conn) {
  const db = conn || connection
  return conn('categories')
    .join('local_events_categories_junction', 'local_events_categories_junction.category_id', '=', 'categories.id')
    .join('local_events', 'local_events.id', '=', 'local_events_categories_junction.event_id')
    .where('categories.categoryName', category)
    .select('local_events.eventName as eventName', 'local_events.date as date', 'local_events.location as location', 'local_events.time as time')
}

// CATEGORY FUNCTIONS

function getCategories(conn) {
  const db = conn || connection
  return db('categories')
    .select()
}

function getCategoryById(id, conn) {
  const db = conn || connection
  return db('categories')
    .where('id', id)
    .select('id', 'categoryName')
}

function getCategoryByName(category, conn) {
  const db = conn || connection
  return db('categories')
    .where('categories.categoryName', category)
    .select('id', 'categoryName')
    .first()
}
