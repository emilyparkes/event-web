exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, eventName: 'Farmers-Market', date: 'Sunday 26 May', location: 'Clevedon', address: '1 Paddock Rd', time: '12pm-5pm', tickets: 'Free', website: 'None', blurb: 'Come get fresh produce here!', imageUrl: 'http://lorempixel.com/400/200', eventType: 1},
        {id: 2, eventName: 'Moon-Festival', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', tickets: 'Free', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.' , imageUrl: 'http://lorempixel.com/400/200', eventType: 1},
        {id: 3, eventName: 'Balu-Brigada', date: 'Tuesday 28 May', location: 'CBD', address: 'lil club, 12 ponsonby rd', time: '6pm-10pm', tickets: '$10 R18', website: 'www.lilclub.events', blurb: 'Balu Brigada is playing and you should hear them!' , imageUrl: 'http://lorempixel.com/400/200', eventType: 1},
        {id: 4, eventName: 'Comedy-Fest', date: 'Monday 11 June', location: 'CBD', address: 'town hall', time: '5pm-11pm', tickets: '$15 R18', website: 'www.comedyfest.akl', blurb: 'Come laugh at funny people telling funny stories.' , imageUrl: 'http://lorempixel.com/400/200', eventType: 1},
        {id: 5, eventName: 'Jewellery-Sale', date: 'Saturday 25 May', location: 'My House', address: '112 road', time: '10am-3pm', tickets: 'Free', website: 'www.sallysells.shop', blurb: 'I am selling jewellery come buy some.', imageUrl: 'http://lorempixel.com/400/200', eventType: 2},
        {id: 6, eventName: 'Community-Garden-Day', date: 'Saturday 25 May', location: 'Botany', address: 'local community plot', time: '10am-6pm', tickets: 'Free', website: '', blurb: 'Let us garden together and learn something new.', imageUrl: 'http://lorempixel.com/400/200', eventType: 2},
        {id: 7, eventName: 'Fruit-Stall', date: 'Sunday 26 May', location: 'Mission Bay', address: 'Tamaki Drive', time: '7am-3pm', tickets: 'Free', website: '', blurb: 'All kinds of fruit sold cheap from my garden', imageUrl: 'http://lorempixel.com/400/200', eventType: 2},
        {id: 8, eventName: 'Hockey-Club-Open-Day-and-Lessons', date: 'Sunday 12 June', location: 'Botany', address: 'hockey club, 12 Sports Road', time: '8am-5pm', tickets: '$10 lessons', website: 'www.hockeyclub.sports', blurb: 'Come to our newly refurbish club and learn to play hockey for half price today!', imageUrl: 'http://lorempixel.com/400/200', eventType: 2}
      ])
    })
}
