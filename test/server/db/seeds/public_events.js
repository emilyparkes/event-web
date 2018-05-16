exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('public_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('public_events').insert([
        {id: 1, eventName: 'Farmers-Market', date: 'Sunday 26 May', location: 'Clevedon', address: '1 Paddock Rd', time: '12pm-5pm', tickets: 'Free', website: 'None', blurb: 'Come get fresh produce here!'},
        {id: 2, eventName: 'Moon-Festival', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', tickets: 'Free', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.'},
        {id: 3, eventName: 'Balu-Brigada', date: 'Tuesday 28 May', location: 'CBD', address: 'lil club, 12 ponsonby rd', time: '6pm-10pm', tickets: '$10 R18', website: 'www.lilclub.events', blurb: 'Balu Brigada is playing and you should hear them!'},
        {id: 4, eventName: 'Comedy-Fest', date: 'Monday 11 June', location: 'CBD', address: 'town hall', time: '5pm-11pm', tickets: '$15 R18', website: 'www.comedyfest.akl', blurb: 'Come laugh at funny people telling funny stories.'}
      ])
    })
}
