import request from 'superagent'

import {getToken} from './token'
import {isAuthenticated} from './auth'

const baseUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const token = getToken('token')
  const headers = {
    Accept: 'application/json'
  }

  if (isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}
