exports.up = (knex, Promise) => {
  return knex.schema.hasTable('user_invitedto_events').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('user_invitedto_events', (table) => {
        table.increments('id').primary()
        table.integer('invitee_user_id').references('users.id')
        table.integer('event_id').references('events.id')
        table.integer('inviter_user_id').references('users.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user_invitedto_events')
}
