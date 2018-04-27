exports.up = (knex, Promise) => {
  return knex.schema.hasTable('public_events_categories_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('public_events_categories_junction', (table) => {
        table.increments('id').primary()
        table.integer('event_id').unsigned().references('public_events.id')
        table.integer('category_id').unsigned().references('categories.id')      
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('public_events_categories_junction')
}
