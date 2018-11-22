import request from 'superagent'

import {showError} from '../error'
import baseUrl from '../../lib/base-url'

export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE'
export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE'
export const REQUEST_SAVE_PROFILE = 'REQUEST_SAVE_PROFILE'
export const RECEIVE_SAVE_PROFILE = 'RECEIVE_SAVE_PROFILE'

export const requestUserProfile = () => {
  return {
    type: REQUEST_USER_PROFILE
  }
}

export const receiveUserProfile = (userProfile) => {
  return {
    type: RECEIVE_USER_PROFILE,
    userProfile
  }
}

export function getProfile (username) {
  return (dispatch) => {
    dispatch(requestUserProfile())
    request.get(`/api/v1/users/profile/${username}`)
      .then(res => {
        dispatch(receiveUserProfile(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export const requestSaveProfile = () => {
  return {
    type: REQUEST_SAVE_PROFILE
  }
}

export const receiveSaveProfile = (updatedProfile) => {
  return {
    type: RECEIVE_SAVE_PROFILE,
    updatedProfile
  }
}

export function saveUserProfile (updatedProfile, username) {
  return (dispatch) => {
    dispatch(requestSaveProfile())
    request.put(`${baseUrl}/api/v1/users/profile/${username}`, updatedProfile)
      .then(res => {
        dispatch(receiveSaveProfile(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
