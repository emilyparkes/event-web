exports.up = (knex, Promise) => {
  return knex.schema.hasTable('categories').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('categories', (table) => {
        table.increments('id').primary()
        table.string('categoryname')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}