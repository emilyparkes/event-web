exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events_venues_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events_venues_junction', (table) => {
        table.increments('id').primary()
        table.integer('venue_id').references('venues.id') 
        table.integer('event_id').references('events.id')
             
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events_venues_junction')
}