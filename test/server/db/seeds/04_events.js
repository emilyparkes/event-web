exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, eventName: 'Farmers-Market', imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 26 May', location: 'Clevedon', address: '1 Paddock Rd', time: '12pm-5pm', ticketInfo: 'Free', ticketUrl: '', website: 'None', blurb: 'Come get fresh produce here!',  eventType: 1},
        {id: 2, eventName: 'Moon-Festival', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', ticketInfo: 'Free', ticketUrl: '', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.' ,  eventType: 1},
        {id: 3, eventName: 'Balu-Brigada', imageUrl: 'http://lorempixel.com/400/200', date: 'Tuesday 28 May', location: 'CBD', address: 'lil club, 12 ponsonby rd', time: '6pm-10pm', ticketInfo: '$10 R', ticketUrl: '', website: 'www.lilclub.events', blurb: 'Balu Brigada is playing and you should hear them!' ,  eventType: 1},
        {id: 4, eventName: 'Comedy-Fest', imageUrl: 'http://lorempixel.com/400/200', date: 'Monday 11 June', location: 'CBD', address: 'town hall', time: '5pm-11pm', ticketInfo: '$15 R', ticketUrl: '', website: 'www.comedyfest.akl', blurb: 'Come laugh at funny people telling funny stories.' ,  eventType: 1},
        {id: 5, eventName: 'Jewellery-Sale', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 25 May', location: 'My House', address: '112 road', time: '10am-3pm', ticketInfo: 'Free', ticketUrl: '', website: 'www.sallysells.shop', blurb: 'I am selling jewellery come buy some.',  eventType: 2},
        {id: 6, eventName: 'Community-Garden-Day', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 25 May', location: 'Botany', address: 'local community plot', time: '10am-6pm', ticketInfo: 'Free', ticketUrl: '', website: '', blurb: 'Let us garden together and learn something new.',  eventType: 2},
        {id: 7, eventName: 'Fruit-Stall', imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 26 May', location: 'Mission Bay', address: 'Tamaki Drive', time: '7am-3pm', ticketInfo: 'Free', ticketUrl: '', website: '', blurb: 'All kinds of fruit sold cheap from my garden',  eventType: 2},
        {id: 8, eventName: 'Hockey-Club-Open-Day-and-Lessons', imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 12 June', location: 'Botany', address: 'hockey club, 12 Sports Road', time: '8am-5pm', ticketInfo: '$10 l', ticketUrl: '', website: 'www.hockeyclub.sports', blurb: 'Come to our newly refurbish club and learn to play hockey for half price today!',  eventType: 2}
      ])
    })
}


