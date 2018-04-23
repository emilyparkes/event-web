exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, categoryName: 'Concerts'},
        {id: 2, categoryName: 'Gigs'},
        {id: 3, categoryName: 'Festivals'},
        {id: 4, categoryName: 'Art'},
        {id: 5, categoryName: 'Theatre'},
        {id: 6, categoryName: 'Food'},
        {id: 7, categoryName: 'Markets'},
        {id: 8, categoryName: 'City Pop-Ups'},
        {id: 9, categoryName: 'Community'},
        {id: 10, categoryName: 'Sports & Outdoors'}
      ])
    })
}
