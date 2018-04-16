
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { id: 1, eventname: 'Farmers Market', date: 'Saturday 14 April', location: 'Mt Albert', address: '847 New North Rd, Mt Albert, Auckland', time: '9am - 12.30pm', tickets: 'Free', website: '', blurb: 'Fresh veggies and fruit from local growers'},
        { id: 2, eventname: 'Deadly Saturdays', date: 'Saturday 21 April', location: 'CBD', address: 'Impala Nightclub, 7 Shortland Street, CBD, Auckland', time: '10pm - 4am', tickets: '$10 door sales', website: '', blurb: 'Party it up at impala nighclub'},
        { id: 3, eventname: 'Fresh Comedy Wednesday', date: 'Wednesday 25 April', location: 'Ponsonby', address: 'Revelry, 106 Ponsonby Rd, Ponsonby, Auckland', time: '8pm – 10pm', tickets: 'R18 Free', website: '', blurb: 'Comedy fun night'},
        { id: 4, eventname: 'Imagine Dragons', date: 'Monday 21 May', location: 'Spark Arena, 42 Mahuhu Cres, CBD, Auckland', address: '', time: '6pm - late', tickets: '', website: '', blurb: 'Imagine dragons concert woo'},
        { id: 5, eventname: 'Store Opening! Mecca Maxima', date: 'Saturday 21 April', location: 'CBD', address: '110 Queen St, Auckland', time: '9am -6pm', tickets: 'Free', website: '', blurb: 'A store opening yay!'},
        { id: 6, eventname: 'rowValue3', date: 'rowVaelue1', location: 'rowVaelue1', address: '', time: 'rowVaerlue1', tickets: '', website: '', blurb: ''},
        { id: 7, eventname: 'rowValue1', date: 'rowVaelue1', location: 'rowVaelue1', address: '', time: 'rowVaerlue1', tickets: '', website: '', blurb: ''},
        { id: 8, eventname: 'rowValue2', date: 'rowVaelue1', location: 'rowVaelue1', address: '', time: 'rowVaerlue1', tickets: '', website: '', blurb: ''},
        { id: 9, eventname: 'rowValue3', date: 'rowVaelue1', location: 'rowVaelue1', address: '', time: 'rowVaerlue1', tickets: '', website: '', blurb: ''},
        { id: 10, eventname: 'rowValue3', date: 'rowVaelue1', location: 'rowVaelue1', address: '', time: 'rowVaerlue1', tickets: '', website: '', blurb: ''}
      ])
    })
}
