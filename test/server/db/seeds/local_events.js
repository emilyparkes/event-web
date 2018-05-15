
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('local_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('local_events').insert([
        {id: 1, eventName: 'Jewellery-Sale', date: 'Saturday 25 May', location: 'My House', address: '112 road', time: '10am-3pm', tickets: 'Free', website: 'www.sallysells.shop', blurb: 'I am selling jewellery come buy some.'},
        {id: 2, eventName: 'Community-Garden-Day', date: 'Saturday 25 May', location: 'Botany', address: 'local community plot', time: '10am-6pm', tickets: 'Free', website: '', blurb: 'Let us garden together and learn something new.'},
        {id: 3, eventName: 'Fruit-Stall', date: 'Sunday 26 May', location: 'Mission Bay', address: 'Tamaki Drive', time: '7am-3pm', tickets: 'Free', website: '', blurb: 'All kinds of fruit sold cheap from my garden'},
        {id: 4, eventName: 'Hockey-Club-Open-Day-and-Lessons', date: 'Sunday 12 June', location: 'Botany', address: 'hockey club, 12 Sports Road', time: '8am-5pm', tickets: '$10 lessons', website: 'www.hockeyclub.sports', blurb: 'Come to our newly refurbish club and learn to play hockey for half price today!'}
      ])
    })
}
