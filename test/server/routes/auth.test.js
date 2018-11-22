// const request = require('supertest')
// const server = require('../../../server/server')

test('test environment for auth routes is operating correctly', () => {
  expect(true).toBeTruthy()
})

// test('GET /api/v1/auth/register', () => {
//   const eventName = 'Farmers-Market'
//   return request(server)
//     .get('/api/v1/auth/register')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then(res => {
//       expect(res.body[0].eventName).toBe('Farmers-Market')
//     })
// })

// test('GET /api/v1/auth/signin', () => {
//   return request(server)
//     .get('/api/v1/auth/signin')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then(res => {
//       expect(res.body.publicEvents.length).toBe(4)
//       expect(res.body.publicEvents[0].eventName).toBe('Farmers-Market')
//     })
// })
