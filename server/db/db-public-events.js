const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
getPublicEvents,
getPublicEventByName,
getPublicEventsByCategoryId
}

function getPublicEvents(testConn) {
  const conn = testConn || connection
  return conn('public_events')
    .select()
}

function getPublicEventByName(eventName, testConn) {
  const conn = testConn || connection
  return conn('public_events')
    .where('public_events.eventName', eventName)
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
