exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'emilycoco@me.com', username: 'emilycoco', hash: 'emily'},
        {id: 2, email: 'jane@doe.com', username: 'janedoe', hash: 'jane'}
      ])
    })
}
