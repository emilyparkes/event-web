
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events_event_types_junction').del()
    .then(function () {
      // Inserts seed entries
      // Type 1 is Public, type 2 is local
      return knex('events_event_types_junction').insert([
        {id: 1, event_id: 1, type_id: 1},
        {id: 2, event_id: 2, type_id: 1},
        {id: 3, event_id: 3, type_id: 1},
        {id: 4, event_id: 4, type_id: 1},
        {id: 5, event_id: 5, type_id: 1},
        {id: 6, event_id: 6, type_id: 2},
        {id: 7, event_id: 7, type_id: 2},
        {id: 8, event_id: 8, type_id: 2},
        {id: 9, event_id: 9, type_id: 2},
        {id: 10, event_id: 10, type_id: 2},
      ])
    })
}
