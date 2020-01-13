
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events_venues_junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('events_venues_junction').insert([
        {id: 1, venue_id: 1, event_id: 1},
        {id: 2, venue_id: 1, event_id: 2},
        {id: 3, venue_id: 1, event_id: 3},
        {id: 4, venue_id: 1, event_id: 4},
        {id: 5, venue_id: 2, event_id: 5},
        {id: 6, venue_id: 2, event_id: 6},
        {id: 7, venue_id: 2, event_id: 7},
        {id: 8, venue_id: 2, event_id: 8}
      ])
    })
}
