exports.up = (knex, Promise) => {
  return knex.schema.hasTable('local_events_categories_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('local_events_categories_junction', (table) => {
        table.increments('id').primary()
        table.integer('event_id').references('local_events.id')
        table.integer('category_id').references('categories.id')      
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('local_events_categories_junction')
}