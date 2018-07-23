exports.up = (knex, Promise) => {
  return knex.schema.hasTable('user_friends').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('user_friends', (table) => {
        table.increments('id').primary()
        table.integer('user_id').references('users.id')
        table.integer('friend_id').references('users.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_friends')
}
