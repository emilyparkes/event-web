const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getLocalEvents,
  getPublicEventById,
  getLocalEventById,
  getPublicEventByName,
  getLocalEventByName,
  getPublicEventsByCategoryId,
  getLocalEventsByCategoryId
}

function getPublicEvents(testConn) {
  const conn = testConn || connection
  return conn('public_events')
    .select()
}

function getLocalEvents(testConn) {
  const conn = testConn || connection
  return conn('local_events')
    .select()
}

function getPublicEventById(id, testConn) {
  const conn = testConn || connection
  return conn('public_events')
    .where('public_events.id', id)
    .select()
}

function getLocalEventById(id, testConn) {
  const conn = testConn || connection
  return conn('local_events')
    .where('local_events.id', id)
    .select()
}

function getPublicEventByName(eventName, testConn) {
  const conn = testConn || connection
  return conn('public_events')
    .where('public_events.eventName', eventName)
    .select()
}

function getLocalEventByName(eventName, testConn) {
  const conn = testConn || connection
  return conn('local_events')
    .where('local_events.eventName', eventName)
    .select()
}

function getPublicEventsByCategoryId(category, testConn) {
  const conn = testConn || connection
  return conn('public_events')
    .join('public_events_categories_junction', 'public_events_categories_junction.event_id', 'public_events.id')
    .join('categories', 'categories.category_id', 'categories.id')
    .where('category_id as categoryId', category)
    .select()
}

function getLocalEventsByCategoryId(category, testConn) {
  const conn = testConn || connection
  return conn('local_events')
    .join('local_events_categories_junction', 'local_events_categories_junction.event_id', 'events.id')
    .join('categories', 'categories.category_id', 'categories.id')
    .where('category_id as categoryId', category)
    .select()
}

