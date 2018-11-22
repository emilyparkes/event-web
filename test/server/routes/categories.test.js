const request = require('supertest')
const server = require('../../../server/server')

jest.mock('../../../server/db/events', () => ({
  getCategories: () => Promise.resolve([
    {id: 1, categoryName: 'Concerts'},
    {id: 2, categoryName: 'Gigs'},
    {id: 3, categoryName: 'Festivals'},
    {id: 4, categoryName: 'Art'},
    {id: 5, categoryName: 'Theatre'},
    {id: 6, categoryName: 'Food'},
    {id: 7, categoryName: 'Markets'},
    {id: 8, categoryName: 'City-Pop-Ups'},
    {id: 9, categoryName: 'Community'},
    {id: 10, categoryName: 'Sports-&-Outdoors'}
  ]),
  getEventsByCategory: (category) => Promise.resolve([
    {id: 2, eventName: 'Balu-Brigada', websiteUrl: 'www.test.com', category: category},
    {id: 3, eventName: 'Comedy-Fest', websiteUrl: 'www.test1.com', category: category}
  ]),
  getEventFromCategory: (category, eventName) => Promise.resolve(
    {id: 2, eventName: eventName, websiteUrl: 'www.test.com', category: category}
  )
}))

test('test environment for categories route is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('GET /api/v1/eventscategories/categories/:category/:eventName', () => {
  const eventName = 'Balu-Brigada'
  const category = 'Gigs'
  return request(server)
    .get(`/api/v1/eventscategories/categories/${category}/${eventName}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.eventName).toBe('Balu-Brigada')
      expect(res.body.category).toBe('Gigs')
    })
})

test('GET /api/v1/eventscategories/categories/:category', () => {
  const category = 'Gigs'
  return request(server)
    .get(`/api/v1/eventscategories/categories/${category}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body[0].category).toBe('Gigs')
    })
})

test('GET /api/v1/eventscategories/', () => {
  return request(server)
    .get('/api/v1/eventscategories/')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.categories.length).toBe(10)
    })
})
