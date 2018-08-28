exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, eventName: 'Farmers-Market', date_start: '2018-09-25', time_start: '08:00:00', date_end: '2018-09-25', time_end: '16:00:00', image: 'http://lorempixel.com/400/200',  description: 'Come get fresh produce here!', access: 'Free Event', tickets: '', restrictions: 'All Ages',  eventType: 1},
        {id: 2, eventName: 'Moon-Festival', date_start: '2018-10-20', time_start: '16:00:00', date_end: '2018-10-20', time_end: '24:00:00', image: 'http://lorempixel.com/400/200', description: 'A festival to celebrate the night and full moon.' , access: 'Free Event', tickets: '', restrictions: 'All Ages',  eventType: 1},
        {id: 3, eventName: 'Balu-Brigada', date_start: '2018-10-05', time_start: '08:00:00', date_end: '2018-10-05', time_end: '23:30:00', image: 'http://lorempixel.com/400/200',  description: 'Balu Brigada is playing and you should hear them!' , access: 'Online Tickets and Door Sales Available', tickets: 'http://www1.ticketmaster.co.nz/?beta=1', restrictions: 'R18',  eventType: 1},
        {id: 4, eventName: 'Comedy-Fest', date_start: '2018-09-25', time_start: '15:30:00', date_end: '2018-09-25', time_end: '24:00:00', image: 'http://lorempixel.com/400/200',  description: 'Come laugh at funny people telling funny stories.' , access: 'Online Tickets', tickets: 'http://www1.ticketmaster.co.nz/?beta=1', restrictions: 'R21',  eventType: 1},
        {id: 5, eventName: 'Jewellery-Sale', date_start: '2018-10-15', time_start: '12:00:00', date_end: '2018-10-15', time_end: '16:30:00', image: 'http://lorempixel.com/400/200',  description: 'I am selling jewellery come buy some.', access: 'Free Event', tickets: '', restrictions: 'All Ages',  eventType: 2},
        {id: 6, eventName: 'Community-Garden-Day', date_start: '2018-11-23', time_start: '08:00:00', date_end: '2018-11-23', time_end: '16:00:00', image: 'http://lorempixel.com/400/200',  description: 'Let us garden together and learn something new.', access: 'Free Event', tickets: '', restrictions: 'All Ages',  eventType: 2},
        {id: 7, eventName: 'Fruit-Stall', date_start: '2018-12-20', time_start: '08:00:00', date_end: '2018-12-20', time_end: '15:00:00', image: 'http://lorempixel.com/400/200',  description: 'All kinds of fruit sold cheap from my garden', access: 'Free Event', tickets: '', restrictions: 'All Ages',  eventType: 2},
        {id: 8, eventName: 'Hockey-Club-Open-Day-and-Lessons', date_start: '2018-09-25', time_start: '08:00:00', date_end: '2018-09-25', time_end: '17:00:00', image: 'http://lorempixel.com/400/200',  description: 'Come to our newly refurbish club and learn to play hockey for half price today!', access: 'Free Event', tickets: '', restrictions: 'All Ages',  eventType: 2}
      ])
    })
}



