exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'emilycoco@me.com', username: 'emilycoco', hash: 'emily'},
        {id: 2, email: 'jane@doe.com', username: 'janedoe', hash: 'jane'},
        {id: 3, email: 'admin@admin.com', username: 'admin', hash: 'admin'},
        {id: 4, email: 'user@example.com', username: 'example', hash: 'example'}
      ])
    })
}
