exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events', (table) => {
        table.increments('id').primary()
        table.string('eventname')
        table.string('date')
        table.string('location')
        table.string('address')
        table.string('time')
        table.string('tickets')
        table.string('website')
        table.string('blurb')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
