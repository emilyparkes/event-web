const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getPublicEventByName,
  getEventsByCategory,
  getLocalEvents,
  getLocalEventByName,
  getCategories,
  getCategoryById,
  getCategoryByName,
  getEventFromCategory
}

// PUBLIC EVENTS FUNCTIONS

function getPublicEvents(conn) {
  const db = conn || connection
  return db('events')
    .select()
    .where('eventType', 1)
}

// function getPublicEventById(id, conn) {
//   const db = conn || connection
//   return db('events')
//     .where('id', id)
//     .select('id', 'eventName', 'date', 'location',
//      'address', 'time', 'tickets', 'website', 'blurb')
//     .first()
// }

function getPublicEventByName(eventName, conn) {
  const db = conn || connection
  return db('events')
    .where('eventType', 1)
    .where('eventName', eventName)
    .select()
    .first()
}

// LOCAL EVENTS FUNCTIONS

function getLocalEvents(conn) {
  const db = conn || connection
  return db('events')
    .where('eventType', 2)
    .select()
}

// function getLocalEventById(id, conn) {
//   const db = conn || connection
//   return db('events')
//     .where('id', id)
//     .select('id', 'eventName')
//     .first()
// }

function getLocalEventByName(eventName, conn) {
  const db = conn || connection
  return db('events')
    .where('eventType', 2)
    .where('eventName', eventName)
    .select()
    .first()
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

function getEventsByCategory(category, conn) {
  const db = conn || connection
  return db('events')
  .join('events_categories_junction', 'events_categories_junction.event_id', '=', 'events.id')
  .join('categories', 'categories.id', 'events_categories_junction.category_id' )
  .where('categories.categoryName', category)
  .select()
}

function getEventFromCategory(category, eventName, conn) {
  const db = conn || connection
  return db('events')
  .join('events_categories_junction', 'events_categories_junction.event_id', '=', 'events.id')
  .join('categories', 'categories.id', 'events_categories_junction.category_id' )
  .where('categories.categoryName', category)
  .where('events.eventName', eventName)
  .select()
  .first()
}
