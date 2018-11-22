const request = require('supertest')
const server = require('../../../server/server')

jest.mock('../../../server/db/events', () => ({
  getPublicEvents: () => Promise.resolve([
    {id: 1, eventName: 'Farmers-Market', imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 26 May', location: 'Clevedon', address: '1 Paddock Rd', time: '12pm-5pm', ticketInfo: 'Free', ticketUrl: '', website: 'None', blurb: 'Come get fresh produce here!', eventType: 1},
    {id: 2, eventName: 'Moon-Festival', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 26 May', location: 'CBD', address: 'Queen St', time: '7pm-2am', ticketInfo: 'Free', ticketUrl: '', website: 'www.moonfestival.akl', blurb: 'A festival to celebrate the night and full moon.', eventType: 1},
    {id: 3, eventName: 'Balu-Brigada', imageUrl: 'http://lorempixel.com/400/200', date: 'Tuesday 28 May', location: 'CBD', address: 'lil club, 12 ponsonby rd', time: '6pm-10pm', ticketInfo: '$10 R', ticketUrl: '', website: 'www.lilclub.events', blurb: 'Balu Brigada is playing and you should hear them!', eventType: 1},
    {id: 4, eventName: 'Comedy-Fest', imageUrl: 'http://lorempixel.com/400/200', date: 'Monday 11 June', location: 'CBD', address: 'town hall', time: '5pm-11pm', ticketInfo: '$15 R', ticketUrl: '', website: 'www.comedyfest.akl', blurb: 'Come laugh at funny people telling funny stories.', eventType: 1}
  ]),
  getPublicEventByName: (eventName) => Promise.resolve([
    {id: 4, eventName: eventName, imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 26 May', location: 'Clevedon', address: '1 Paddock Rd', time: '12pm-5pm', ticketInfo: 'Free', ticketUrl: '', website: 'None', blurb: 'Come get fresh produce here!', eventType: 1}
  ])
}))

test('test environment for public-events routes is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('GET /api/v1/public-events/:eventName', () => {
  const eventName = 'Farmers-Market'
  return request(server)
    .get(`/api/v1/public-events/${eventName}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body[0].eventName).toBe('Farmers-Market')
    })
})

test('GET /api/v1/public-events/', () => {
  return request(server)
    .get('/api/v1/public-events/')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.publicEvents.length).toBe(4)
      expect(res.body.publicEvents[0].eventName).toBe('Farmers-Market')
    })
})
