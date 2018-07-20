exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events', (table) => {
        table.increments('id').primary()
        table.string('eventName')
        table.string('imageUrl')
        table.string('date')
        table.string('location')
        table.string('address')
        table.string('time')
        table.string('ticketInfo')
        table.string('ticketUrl')
        table.string('website')
        table.string('blurb')
        table.integer('eventType')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
