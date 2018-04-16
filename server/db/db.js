const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getLocalEvents, 
  getEventsByCategoryName
}

function getPublicEvents (public, testConn) {
  const conn = testConn || connection
  return conn('events')
  .join('event_type_junction', 'event_type_junction.event_id', 'events.id')
  .join('event_types', 'event_types.type_id','types.id')
  .where('event_types.id', 1)
  .select()
}

function getLocalEvents (testConn) {
  const conn = testConn || connection
  return conn('events')
    .join('event_type_junction', 'event_type_junction.event_id', 'events.id')
    .join('event_types', 'event_types.type_id','types.id')
    .where('event_types.id', 2)
    .select()
}

function getEventsByCategoryName (category, testConn) {
  const conn = testConn || connection
  return conn('events')
  .join('events_categories_junction', 'events_categories_junction.event_id', 'events.id')
  .join('categories', 'categories.category_id', 'categories.id')
  .where('category_id as categoryId', category)
  .select()
}
