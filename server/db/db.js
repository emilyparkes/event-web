const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPublicEvents,
  getLocalEvents, 
  getEventByName,
  getEventsByCategoryId
}

function getPublicEvents (testConn) {
  const conn = testConn || connection
  return conn('events')
  .join('events_event_types_junction', 'events_event_types_junction.event_id', 'events.id')
  .join('event_types', 'event_types.type_id','types.id')
  .where('type_id', 1)
  .select()
}

function getLocalEvents (testConn) {
  const conn = testConn || connection
  return conn('events')
    .join('events_event_types_junction', 'events_event_types_junction.event_id', 'events.id')
    .join('event_types', 'event_types.type_id','types.id')
    .where('type_id', 2)
    .select()
}

function getEventByName (eventName, testConn) {
   const conn = testConn || connection
   return conn('events')
    .where('events.eventname', eventName)
    .select()
}

function getEventsByCategoryId (category, testConn) {
  const conn = testConn || connection
  return conn('events')
  .join('events_categories_junction', 'events_categories_junction.event_id', 'events.id')
  .join('categories', 'categories.category_id', 'categories.id')
  .where('category_id as categoryId', category)
  .select()
}
