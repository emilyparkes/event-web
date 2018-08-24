exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events', (table) => {
        table.increments('id').primary()
        table.string('eventName')
        table.string('region')
        table.string('address')
        table.date('date_start')
        table.string('time_start')
        table.date('date_end')
        table.string('time_end')
        table.string('image')
        table.string('description')
        table.string('access')
        table.string('tickets')
        table.string('restrictions')
        table.string('eventType')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
