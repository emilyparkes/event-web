import request from 'superagent'

import baseUrl from '../lib/base-url'

export const RECEIVE_FORM = 'RECEIVE_FORM'

export const receiveForm = (newEvent) => {
  return {
    type: RECEIVE_FORM,
    newEvent
  }
}

export function sendForm(newEvent) {
  return (dispatch) => {
    request
      .post(`${baseUrl}/api/v1/add`)
      .send(newEvent)
      .end(res => {
        res.send(res)
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}