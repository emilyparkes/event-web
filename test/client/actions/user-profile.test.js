/* global test expect */

import { receiveUserProfile } from '../../../client/actions/auth/user-profile'

test('receiveUserProfile returns the correct action type', () => {
  const expected = 'RECEIVE_USER_PROFILE'

  const actual = receiveUserProfile()

  expect(actual.type).toBe(expected)
})

test('receiveUserProfile returns the correct action', () => {
  const expected = {
    type: 'RECEIVE_USER_PROFILE'
  }

  const actual = receiveUserProfile()

  expect(actual).toEqual(expected)
})

test('receiveUserProfile returns the event from selected category', () => {
  const userProfile = {username: 'emilycoco', firstName: 'Emily', surname: 'Parkes'}
  const expected = {
    type: 'RECEIVE_USER_PROFILE',
    userProfile
  }

  const actual = receiveUserProfile(userProfile)

  expect(actual).toEqual(expected)
})
