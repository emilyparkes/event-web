exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events_event_types_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events_event_types_junction', (table) => {
        table.increments('id').primary()
        table.integer('event_id').references('events.id')
        table.integer('type_id').references('event_types.id')      
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
