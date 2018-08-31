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
  getEventFromCategory,
  createEvent
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
    .join('categories', 'categories.id', 'events_categories_junction.category_id')
    .where('categories.categoryName', category)
    .select()
}

function getEventFromCategory(category, eventName, conn) {
  const db = conn || connection
  return db('events')
    .join('events_categories_junction', 'events_categories_junction.event_id', '=', 'events.id')
    .join('categories', 'categories.id', 'events_categories_junction.category_id')
    .where('categories.categoryName', category)
    .where('events.eventName', eventName)
    .select()
    .first()
}

// CREATE EVENT FUNCTION

function createEvent(newEvent, conn) {
  const db = conn || connection
  return db('venues')
    .insert({
      venueName: newEvent.venueName,
      address: newEvent.address,
      suburb: newEvent.suburb,
      region: newEvent.region,
      postal: newEvent.postal,
      country: 'New Zealand',
      lat: newEvent.lat,
      lng: newEvent.lng
    })
  // .then((eId) => {
  //   return db('events_venues_junction')
  //     .insert({
  //       event_id: eId[0],
  //     })
  //     .then((vId) => {
  //       return db('events_venues_junction')
  //         .insert({
  //           id: vId[0],
  //           venueName: newEvent.venueName,
  //           address: newEvent.address,
  //           suburb: newEvent.suburb,
  //           region: newEvent.region
  //         })
  // })
  // })
}

// eventName: newEvent.eventName,
// date_start: newEvent.dateStart,
// time_start: newEvent.timeStart,
// date_end: newEvent.dateEnd,
// time_end: newEvent.timeEnd,
// image: newEvent.image,
// description: newEvent.description,
// access: newEvent.access,
// tickets: newEvent.tickets,
// restrictions: newEvent.restrictions


// return db('users')
//   .insert({
//     username,
//     hash,
//     role: 'member'
//   })
//   .then((id) => {
//     return db('profiles')
//       .insert({
//         user_id: id[0],
//         name,
//         membership_type: 'member'
//       })
//   })
// }
