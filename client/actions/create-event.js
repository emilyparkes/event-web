import request from 'superagent'

import { showError } from './error'
import baseUrl from '../lib/base-url'

export const REQUEST_FORM = 'REQUEST_FORM'
export const RECEIVE_FORM = 'RECEIVE_FORM'

const requestForm = () => {
  return {
    type: REQUEST_FORM
  }
}

export const receiveForm = (newEvent) => {
  return {
    type: RECEIVE_FORM,
    newEvent
  }
}

export function sendForm (newEvent) {
  return (dispatch) => {
    dispatch(requestForm())
    request.post(`${baseUrl}/api/v1/add/create-event`, newEvent )
      .then(res => {
        console.log(res.body)
        dispatch(receiveForm(res.body))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
