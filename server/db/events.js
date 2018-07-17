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
    .select('id', 'eventName', 'date', 'location',
      'address', 'time', 'tickets', 'website', 'blurb')
    .first()
}

function getPublicEventsByCategory(category, conn) {
  const db = conn || connection
  return db('categories')
    .join('events_categories_junction', 'events_categories_junction.category_id', '=', 'categories.id')
    .join('events', 'events.id', '=', 'events_categories_junction.event_id')
    .where('categories.categoryName', category)
    .where('events.eventType', 1)
    .select()
}

// LOCAL EVENTS FUNCTIONS

function getLocalEvents(conn) {
  const db = conn || connection
  return db('events')
    .select()
    .where('eventType', 2)
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
    .select('id', 'eventName', 'date', 'location',
      'address', 'time', 'tickets', 'website', 'blurb')
    .first()
}

function getLocalEventsByCategory(category, conn) {
  const db = conn || connection
  return conn('categories')
    .join('events_categories_junction', 'events_categories_junction.category_id', '=', 'categories.id')
    .join('events', 'events.id', '=', 'events_categories_junction.event_id')
    .where('categories.categoryName', category)
    .where('events.eventType', 2)
    .select('events.eventName as eventName', 'events.date as date', 'events.location as location', 'events.time as time')
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
