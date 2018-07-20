
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_goingto_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_goingto_events').insert([
        {id: 1, user_id: 1, event_id: 6},
        {id: 2, user_id: 1, event_id: 7},
        {id: 3, user_id: 2, event_id: 3},
        {id: 4, user_id: 3, event_id: 2},
        {id: 5, user_id: 4, event_id: 2},
        {id: 6, user_id: 4, event_id: 3},
        {id: 7, user_id: 4, event_id: 5},
        {id: 8, user_id: 5, event_id: 7},
        {id: 9, user_id: 5, event_id: 9},
        {id: 10, user_id: 6, event_id: 9},
        {id: 11, user_id: 6, event_id: 10},
        {id: 12, user_id: 7, event_id: 6},
        {id: 13, user_id: 7, event_id: 7},
        {id: 14, user_id: 8, event_id: 10},
        {id: 15, user_id: 8, event_id: 8}
      ])
    })
}
