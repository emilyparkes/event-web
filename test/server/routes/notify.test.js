const request = require('supertest')
const server = require('../../../server/server')

jest.mock('../../../server/db/notify', () => ({
  getFriendsList: (id) => Promise.resolve([
    { id: id, user_id: 1, friend_id: 2, email: 'jane@doe.com', username: 'janedoe' },
    { id: id, user_id: 1, friend_id: 3, email: 'admin@admin.com', username: 'admin' }
  ]),
  getInterestedInList: (id) => Promise.resolve([
    { event_id: 4, user_id: id, eventName: 'Comedy-Fest', websiteUrl: 'www.test.com', date: 'Monday 11 June' },
    { event_id: 5, user_id: id, eventName: 'Jewellery-Sale', websiteUrl: 'www.test1.com', date: 'Saturday 25 May' },
    { event_id: 6, user_id: id, eventName: 'Community-Garden-Day', websiteUrl: 'www.test2.com', date: 'Saturday 25 May' }
  ]),
  getGoingToList: (id) => Promise.resolve([
    { event_id: 1, user_id: id, eventName: 'Comedy-Fest', websiteUrl: 'www.test.com', date: 'Monday 11 June' },
    { event_id: 2, user_id: id, eventName: 'Jewellery-Sale', websiteUrl: 'www.test1.com', date: 'Saturday 25 May' },
    { event_id: 3, user_id: id, eventName: 'Community-Garden-Day', websiteUrl: 'www.test2.com', date: 'Saturday 25 May' }
  ]),
  getInvitedToList: (id) => Promise.resolve([
    { id: 2, invitee_user_id: id, event_id: 2, inviter_user_id: 2, eventName: 'Moon-Festival', websiteUrl: 'www.test.com', date: 'Monday 11 June' },
    { id: 3, invitee_user_id: id, event_id: 3, inviter_user_id: 2, eventName: 'Balu-Brigada', websiteUrl: 'www.test.com', date: 'Monday 11 June' },
    { id: 4, invitee_user_id: id, event_id: 4, inviter_user_id: 2, eventName: 'Comedy-Fest', websiteUrl: 'www.test.com', date: 'Monday 11 June' }
  ]),
}))


test('test environment for notify routes is operating correctly', () => {
  expect(true).toBeTruthy()
})

test('GET /api/v1/notify/invitedto', () => {
  return request(server)
    .get('/api/v1/notify/invitedto')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.invitedTo.length).toBe(3)
      expect(res.body.invitedTo[0].eventName).toBe('Moon-Festival')
    })
})

test('GET /api/v1/notify/friends', () => {
  return request(server)
    .get('/api/v1/notify/friends')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.friendsList.length).toBe(2)
      expect(res.body.friendsList[0].username).toBe('janedoe')
    })
})

test('GET /api/v1/notify/interestedin', () => {
  return request(server)
    .get('/api/v1/notify/interestedin')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.interestedIn.length).toBe(3)
      expect(res.body.interestedIn[0].eventName).toBe('Comedy-Fest')
    })
})

test('GET /api/v1/notify/goingto', () => {
  return request(server)
    .get('/api/v1/notify/goingto')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.goingTo.length).toBe(3)
      expect(res.body.goingTo[0].eventName).toBe('Comedy-Fest')
    })
})
