const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getPublicEventById,
  getPublicEventsByCategoryId,
  getLocalEvents,
  getLocalEventById,
  getLocalEventsByCategoryId,
  getCategoryById
}

// PUBLIC EVENTS FUNCTIONS

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

function getPublicEventsByCategoryId(id, conn) {
  const db = conn || connection
  return db('public_events')
    .join('public_events_categories_junction', 'public_events_categories_junction.event_id', '=', 'public_events.id')
    .join('categories', 'categories.id', '=', 'public_events_categories_junction.category_id')
    .where('public_events_categories_junction.category_id', id)
    .select()
}

// LOCAL EVENTS FUNCTIONS

function getLocalEvents(conn) {
  const db = conn || connection
  return db('local_events')
    .select()
}

function getLocalEventById(id, conn) {
  const db = conn || connection
  return db('local_events')
    .where('id', id)
    .select('id', 'eventName')
    .first()
}

function getLocalEventsByCategoryId(id, conn) {
  const db = conn || connection
  return conn('local_events')
    .join('local_events_categories_junction', 'local_events_categories_junction.event_id', 'local_events.id')
    .join('categories', 'local_events_categories_junction.category_id', 'categories.id')
    .where('local_events_categories_junction.event_id', id)
    .select('local_events.eventName')
}

// CATEGORY FUNCTIONS

function getCategoryById(id, conn) {
  const db = conn || connection
  return db('categories')
    .where('id', id)
    .select('id', 'categoryName')
    .first()
}
