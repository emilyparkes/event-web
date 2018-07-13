import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE'

export const receiveUserProfile = (profile) => {
  return {
    type: RECEIVE_USER_PROFILE,
    profile
  }
}

export function getProfile (userId) {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/users/profile/${userId}`)
      .then(res => {
        console.log(res.body)
        dispatch(receiveUserProfile(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}  
