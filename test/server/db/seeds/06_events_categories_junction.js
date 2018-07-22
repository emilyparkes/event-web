
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events_categories_junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('events_categories_junction').insert([
        {id: 1, event_id: 1, category_id: 6},
        {id: 2, event_id: 1, category_id: 7},
        {id: 3, event_id: 2, category_id: 3},
        {id: 4, event_id: 3, category_id: 2},
        {id: 5, event_id: 4, category_id: 2},
        {id: 6, event_id: 4, category_id: 3},
        {id: 7, event_id: 4, category_id: 5},
        {id: 8, event_id: 5, category_id: 7},
        {id: 9, event_id: 5, category_id: 9},
        {id: 10, event_id: 6, category_id: 9},
        {id: 11, event_id: 6, category_id: 10},
        {id: 12, event_id: 7, category_id: 6},
        {id: 13, event_id: 7, category_id: 7},
        {id: 14, event_id: 8, category_id: 10},
        {id: 15, event_id: 8, category_id: 8}
      ])
    })
}
