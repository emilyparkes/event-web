import request from 'superagent'

import baseUrl from '../lib/base-url'

export const RECEIVE_API = 'RECEIVE_API'

export const receiveApi = (events) => {
  return {
    type: RECEIVE_API,
    events
  }
}

export function getEventfindaApi() {
  return (dispatch) => {
    request.get('/api/v1/eventfinda/eventf')
      .then(res => {
        dispatch(receiveApi(res.body))
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  }
}   