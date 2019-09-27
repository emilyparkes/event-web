const request = require('supertest')
const server = require('../server')

jest.mock('../../../server/db/events', () => ({
  getLocalEvents: () => Promise.resolve([
    {id: 5, eventName: 'Jewellery-Sale', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 25 May', location: 'My House', address: '112 road', time: '10am-3pm', ticketInfo: 'Free', ticketUrl: '', website: 'www.sallysells.shop', blurb: 'I am selling jewellery come buy some.', eventType: 2},
    {id: 6, eventName: 'Community-Garden-Day', imageUrl: 'http://lorempixel.com/400/200', date: 'Saturday 25 May', location: 'Botany', address: 'local community plot', time: '10am-6pm', ticketInfo: 'Free', ticketUrl: '', website: '', blurb: 'Let us garden together and learn something new.', eventType: 2},
    {id: 7, eventName: 'Fruit-Stall', imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 26 May', location: 'Mission Bay', address: 'Tamaki Drive', time: '7am-3pm', ticketInfo: 'Free', ticketUrl: '', website: '', blurb: 'All kinds of fruit sold cheap from my garden', eventType: 2},
    {id: 8, eventName: 'Hockey-Club-Open-Day-and-Lessons', imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 12 June', location: 'Botany', address: 'hockey club, 12 Sports Road', time: '8am-5pm', ticketInfo: '$10 l', ticketUrl: '', website: 'www.hockeyclub.sports', blurb: 'Come to our newly refurbish club and learn to play hockey for half price today!', eventType: 2}
  ]),
  getLocalEventByName: (eventName) => Promise.resolve([
    {id: 7, eventName: eventName, imageUrl: 'http://lorempixel.com/400/200', date: 'Sunday 26 May', location: 'Mission Bay', address: 'Tamaki Drive', time: '7am-3pm', ticketInfo: 'Free', ticketUrl: '', website: '', blurb: 'All kinds of fruit sold cheap from my garden', eventType: 2}
  ])
}))

test('test environment for local-events routes is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('GET /api/v1/local-events/:eventName', () => {
  const eventName = 'Fruit-Stall'
  return request(server)
    .get(`/api/v1/local-events/${eventName}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body[0].eventName).toBe('Fruit-Stall')
    })
})

test('GET /api/v1/local-events/', () => {
  return request(server)
    .get('/api/v1/local-events/')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.localEvents.length).toBe(4)
      expect(res.body.localEvents[0].eventName).toBe('Jewellery-Sale')
    })
})
