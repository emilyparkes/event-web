exports.up = (knex, Promise) => {
  return knex.schema.hasTable('local_events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('local_events', (table) => {
        table.increments('id').primary()
        table.string('eventName')
        table.string('date')
        table.string('location')
        table.string('address')
        table.string('time')
        table.string('tickets')
        table.string('website')
        table.string('blurb')
        table.string('imageUrl')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('local_events')
}
