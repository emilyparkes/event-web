exports.up = (knex, Promise) => {
  return knex.schema.hasTable('event_category_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('event_category_junction', (table) => {
        table.increments('id').primary()
        table.integer('event_id').references('events.id')
        table.integer('category_id').references('categories.id')
        table.integer('date_id').references('dates.id')
        table.integer('user_id').references('users.id')       
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
