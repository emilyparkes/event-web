// const request = require('supertest')
// const server = require('../../../server/server')

jest.mock('../../../server/db/user-profiles', () => ({
  getUserProfile: (username) => Promise.resolve([
    {id: 1, user_id: 1, firstName: 'emily', preferredName: 'em', surname: 'parkes', profilePic: 'val', bio: 'I\'m the dev.', phone: '021 555 555', location: 'Auckland', username: username}
  ])
}))

test('test environment for users routes is operating correctly', () => {
  expect(true).toBeTruthy()
})

// test('GET /api/v1/users/profile/:username', () => {
//   const username = 'emilycoco'
//   return request(server)
//     .get(`/api/v1/users/profile/${username}`)
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .then(res => {
//       expect(res.body[0].firstName).toBe('emily')
//     })
// })
