
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_category_junction').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_category_junction').insert([
        {id: 1, event_id: 1, category_id: 6, date_id: 1, user_id: 1},
        {id: 2, event_id: 2, category_id: 2, date_id: 2, user_id: 1},
        {id: 3, event_id: 3, category_id: 5, date_id: 3, user_id: 1},
        {id: 4, event_id: 4, category_id: 1, date_id: 1, user_id: 1},
        {id: 5, event_id: 5, category_id: 0, date_id: 0, user_id: 1},
        {id: 6, event_id: 6, category_id: 0, date_id: 0, user_id: 1},
        {id: 7, event_id: 7, category_id: 0, date_id: 0, user_id: 1},
        {id: 8, event_id: 8, category_id: 0, date_id: 0, user_id: 1},
        {id: 9, event_id: 9, category_id: 0, date_id: 0, user_id: 1}
      ])
    })
}
{id: 1, categoryname: 'Concerts'},
{id: 2, categoryname: 'Gigs'},
{id: 3, categoryname: 'Festivals'},``
{id: 4, categoryname: 'Art'},
{id: 5, categoryname: 'Theatre'},
{id: 6, categoryname: 'Food'},
{id: 7, categoryname: 'Markets'},
{id: 8, categoryname: 'City Pop-Ups'},
{id: 9, categoryname: 'Garage Sale'},
{id: 10, categoryname: 'Sports & Outdoors'}


