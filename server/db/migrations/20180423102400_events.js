exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events', (table) => {
        table.increments('id').primary()
        table.string('eventName')
        table.string('imageUrl')
        table.date('date_start')
        table.string('time_start')
        table.date('date_end')
        table.string('time_end')
        table.string('location')
        table.string('address')
        table.string('restrictions')
        table.string('ticketUrl')
        table.string('website')
        table.string('description')
        table.integer('eventType')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
