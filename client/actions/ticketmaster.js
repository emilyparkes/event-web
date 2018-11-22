import request from 'superagent'

import {showError} from './error'

export const RECEIVE_API = 'RECEIVE_API'

export const receiveApi = (events) => {
  return {
    type: RECEIVE_API,
    events
  }
}

export function getApi () {
  return (dispatch) => {
    request.get('/api/v1/ticketmaster/events')
      .then(res => {
        dispatch(receiveApi(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
