
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('local_events_categories_junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('local_events_categories_junction').insert([
        {id: 1, event_id: 1, category_id: 7},
        {id: 2, event_id: 1, category_id: 9},
        {id: 3, event_id: 2, category_id: 9},
        {id: 4, event_id: 2, category_id: 10},
        {id: 5, event_id: 3, category_id: 6},
        {id: 6, event_id: 3, category_id: 9},
        {id: 7, event_id: 4, category_id: 10}
      ])
    })
}
