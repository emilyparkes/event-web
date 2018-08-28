
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_interestedin_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_interestedin_events').insert([
        {id: 1, user_id: 1, event_id: 4},
        {id: 2, user_id: 1, event_id: 5},
        {id: 3, user_id: 1, event_id: 6},
        {id: 4, user_id: 2, event_id: 1},
        {id: 5, user_id: 2, event_id: 2},
        {id: 6, user_id: 2, event_id: 3}
      ])
    })
}
