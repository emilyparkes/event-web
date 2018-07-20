exports.up = (knex, Promise) => {
  return knex.schema.hasTable('user_goingto_events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('user_goingto_events', (table) => {
        table.increments('id').primary()
        table.integer('user_id').references('users.id')
        table.integer('event_id').references('events.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_goingto_events')
}
