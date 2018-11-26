import request from '../../lib/apiClient'
import {showSuccess, showError, clearError} from '../error'
import {saveUserToken, logOut} from '../../lib/auth'

export const REQUEST_LOG_OUT = 'REQUEST_LOG_OUT'
export const RECEIVE_LOG_OUT = 'RECEIVE_LOG_OUT'

export const REQUEST_SIGNIN = 'REQUEST_SIGNIN'
export const RECEIVE_SIGNIN = 'RECEIVE_SIGNIN'

export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION'
export const RECEIVE_USER_REGISTRATION = 'RECEIVE_USER_REGISTRATION'

export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const REQUEST_ALL_USERS = 'REQUEST_ALL_USERS'
export const REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE'
export const RECEIVE_UPDATE_PROFILE = 'RECEIVE_UPDATE_PROFILE'

const requestLogOut = () => {
  return {
    type: REQUEST_LOG_OUT
  }
}

const receiveLogOut = () => {
  return {
    type: RECEIVE_LOG_OUT
  }
}

const requestSignIn = () => {
  return {
    type: REQUEST_SIGNIN
  }
}

const receiveSignIn = (token) => {
  return {
    type: RECEIVE_SIGNIN,
    token
  }
}

const requestUserRegistration = () => {
  return {
    type: REQUEST_USER_REGISTRATION
  }
}

const receiveUserRegistration = (token) => {
  return {
    type: RECEIVE_USER_REGISTRATION,
    token
  }
}

const requestUserDetails = () => {
  return {
    type: REQUEST_USER_DETAILS
  }
}

const receiveUserDetails = (userDetails) => {
  return {
    type: RECEIVE_USER_DETAILS,
    userDetails
  }
}

export const receiveAllUsers = (allUsers) => {
  return {
    type: RECEIVE_ALL_USERS,
    allUsers
  }
}
export const requestAllUsers = () => {
  return {
    type: REQUEST_ALL_USERS
  }
}

const requestUpdateProfile = () => {
  return {
    type: REQUEST_UPDATE_PROFILE
  }
}

const receiveUpdateProfile = () => {
  return {
    type: RECEIVE_UPDATE_PROFILE
  }
}

export function register (newUser) {
  return (dispatch) => {
    dispatch(requestUserRegistration())
    return request('post', '/auth/register', newUser)
      .then(res => {
        const token = saveUserToken(res.body.token)
        dispatch(clearError())
        dispatch(receiveUserRegistration(res.body))
        dispatch(getUserDetails(token.id))
        dispatch(showSuccess('Registration successful'))
      })
      .catch(err => {
        const res = err.response.body
        if (res && res.errorType === 'USERNAME_UNAVAILABLE') {
          return dispatch(showError('This username is unavailable.'))
        }
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function signIn (user) {
  return (dispatch) => {
    dispatch(requestSignIn())
    request('post', '/auth/signin', user)
      .then(res => {
        const token = saveUserToken(res.body.token)
        dispatch(receiveSignIn(res.body))
        dispatch(getUserDetails(token.id))
        dispatch(clearError())
        getUserDetails(token.id)
        dispatch(showSuccess('You are now logged in.'))
      })
      .catch(err => {
        if (err) {
          return dispatch(showError(err.message))
          // 'Username and password do not match an existing user'))
        } else {
          return dispatch(showError('An unexpected error has occurred'))
        }
      })
  }
}

export function getUserDetails (userId) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/users/${userId}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError())
      })
      // .catch(() => {
      //   dispatch(showError('An unexpected error has occurred.'))
      // })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function getAllUsers () {
  return (dispatch) => {
    dispatch(requestAllUsers())
    return request('get', `/users`)
      .then(res => {
        dispatch(receiveAllUsers(res.body))
        dispatch(clearError())
      })
      // .catch(() => {
      //   dispatch(showError('An unexpected error has occurred.'))
      // })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateProfile (profile) {
  return (dispatch) => {
    dispatch(requestUpdateProfile())
    request('put', `/users/${profile.id}`, profile)
      .then(res => {
        dispatch(receiveUpdateProfile())
        dispatch(getUserDetails(profile.id))
        dispatch(clearError())
      })
      // .catch(() => {
      //   dispatch(showError('An unexpected error has occurred.'))
      // })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function logOutUser () {
  return dispatch => {
    dispatch(requestLogOut())
    logOut()
    dispatch(receiveLogOut())
  }
}
