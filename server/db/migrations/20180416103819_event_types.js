exports.up = (knex, Promise) => {
  return knex.schema.hasTable('event_types').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('event_types', (table) => {
        table.increments('id').primary()
        table.string('event_type')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
