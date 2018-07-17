exports.up = (knex, Promise) => {
  return knex.schema.hasTable('events_categories_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('events_categories_junction', (table) => {
        table.increments('id').primary()
        table.integer('event_id').references('events.id')
        table.integer('category_id').references('categories.id')      
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events_categories_junction')
}