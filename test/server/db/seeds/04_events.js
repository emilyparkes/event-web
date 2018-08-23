exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, eventName: 'Farmers-Market', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Sunday 26 May',  time_start: '', date_end: '', time_end: '', location: 'Clevedon', address: '1 Paddock Rd', time: '12pm-5pm', restrictions: 'Free', ticketUrl: '', website: 'None', description: 'Come get fresh produce here!',  eventType: 1},
        {id: 2, eventName: 'Moon-Festival', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Saturday 26 May', time_start: '', date_end: '', time_end: '', location: 'CBD', address: 'Queen St', time: '7pm-2am', restrictions: 'Free', ticketUrl: '', website: 'www.moonfestival.akl', description: 'A festival to celebrate the night and full moon.' ,  eventType: 1},
        {id: 3, eventName: 'Balu-Brigada', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Tuesday 28 May', time_start: '', date_end: '', time_end: '', location: 'CBD', address: 'lil club, 12 ponsonby rd', time: '6pm-10pm', restrictions: '$10 R', ticketUrl: '', website: 'www.lilclub.events', description: 'Balu Brigada is playing and you should hear them!' ,  eventType: 1},
        {id: 4, eventName: 'Comedy-Fest', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Monday 11 June', time_start: '', date_end: '', time_end: '', location: 'CBD', address: 'town hall', time: '5pm-11pm', restrictions: '$15 R', ticketUrl: '', website: 'www.comedyfest.akl', description: 'Come laugh at funny people telling funny stories.' ,  eventType: 1},
        {id: 5, eventName: 'Jewellery-Sale', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Saturday 25 May', time_start: '', date_end: '', time_end: '', location: 'My House', address: '112 road', time: '10am-3pm', restrictions: 'Free', ticketUrl: '', website: 'www.sallysells.shop', description: 'I am selling jewellery come buy some.',  eventType: 2},
        {id: 6, eventName: 'Community-Garden-Day', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Saturday 25 May', time_start: '', date_end: '', time_end: '', location: 'Botany', address: 'local community plot', time: '10am-6pm', restrictions: 'Free', ticketUrl: '', website: '', description: 'Let us garden together and learn something new.',  eventType: 2},
        {id: 7, eventName: 'Fruit-Stall', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Sunday 26 May',  time_start: '', date_end: '', time_end: '', location: 'Mission Bay', address: 'Tamaki Drive', time: '7am-3pm', restrictions: 'Free', ticketUrl: '', website: '', description: 'All kinds of fruit sold cheap from my garden',  eventType: 2},
        {id: 8, eventName: 'Hockey-Club-Open-Day-and-Lessons', imageUrl: 'http://lorempixel.com/400/200', date_start: 'Sunday 12 June', time_start: '', date_end: '', time_end: '', location: 'Botany', address: 'hockey club, 12 Sports Road', time: '8am-5pm', restrictions: '$10 l', ticketUrl: '', website: 'www.hockeyclub.sports', description: 'Come to our newly refurbish club and learn to play hockey for half price today!',  eventType: 2}
      ])
    })
}


