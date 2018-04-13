exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, categoryname: 'Concerts'},
        {id: 2, categoryname: 'Gigs'},
        {id: 3, categoryname: 'Festivals'},
        {id: 4, categoryname: 'Art'},
        {id: 5, categoryname: 'Theatre'},
        {id: 6, categoryname: 'Food'},
        {id: 7, categoryname: 'Markets'},
        {id: 8, categoryname: 'City Pop-Ups'},
        {id: 9, categoryname: 'Garage Sale'},
        {id: 10, categoryname: 'Sports & Outdoors'}
      ])
    })
}
