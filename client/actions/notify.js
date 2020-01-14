import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const RECEIVE_FRIENDS_LIST = 'RECEIVE_FRIENDS_LIST'

export const receiveFriendsList = (friendsList) => {
  return {
    type: RECEIVE_FRIENDS_LIST,
    friendsList
  }
}

export function getFriendsList () {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/friends`)
      .then(res => {
        dispatch(receiveFriendsList(res.body.friendsList))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export const RECEIVE_GOING_TO_LIST = 'RECEIVE_GOING_TO_LIST'

export const receiveGoingToList = (goingTo) => {
  return {
    type: RECEIVE_GOING_TO_LIST,
    goingTo
  }
}

export function getGoingToList () {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/goingto`)
      .then(res => {
        dispatch(receiveGoingToList(res.body.goingTo))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
export const RECEIVE_INTERESTED_IN_LIST = 'RECEIVE_INTERESTED_IN_LIST'

export const receiveInterestedInList = (interestedIn) => {
  return {
    type: RECEIVE_INTERESTED_IN_LIST,
    interestedIn
  }
}

export function getInterestedInList () {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/interestedin`)
      .then(res => {
        dispatch(receiveInterestedInList(res.body.interestedIn))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export const RECEIVE_INVITED_TO_LIST = 'RECEIVE_INVITED_TO_LIST'

export const receiveInvitedToList = (invitedTo) => {
  return {
    type: RECEIVE_INVITED_TO_LIST,
    invitedTo
  }
}

export function getInvitedToList () {
  return (dispatch) => {
    request.get(`${baseUrl}/api/v1/notify/invitedto`)
      .then(res => {
        dispatch(receiveInvitedToList(res.body.invitedTo))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
