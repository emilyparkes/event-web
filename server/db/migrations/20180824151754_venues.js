exports.up = (knex, Promise) => {
  return knex.schema.hasTable('venues').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('venues', (table) => {
        table.increments('id').primary()
        table.string('venueName')
        table.string('address')
        table.string('townSuburb')
        table.string('region')
        table.string('country')
        table.string('postal')
        table.string('lat')
        table.string('lng')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('venues')
}
