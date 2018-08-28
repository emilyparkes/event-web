exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        { id: 1, venueName: 'Auckland Town Hall', address: '317 Queen St', townSuburb: 'Auckland', region: 'Auckland', country: 'New Zealand', postal: '', lat: '-36.853613', lng: '174.763038' },
        { id: 2, venueName: 'Auckland Botanical Gardens', address: '102 Hill Rd, The Gardens', townSuburb: 'Auckland', region: 'Auckland', country: 'New Zealand', postal: '2105', lat: '-37.011395', lng: '174.907022' }
      ])
    })
}
