/* global test expect */

import { showError } from '../../../client/actions/error'

test('showError returns the correct action type', () => {
  const expected = 'SHOW_ERROR'

  const actual = showError()

  expect(actual.type).toBe(expected)
})

test('showError returns the correct action', () => {
  const expected = {
    type: 'SHOW_ERROR'
  }

  const actual = showError()

  expect(actual).toEqual(expected)
})

test('showError returns the error message', () => {
  const message = 'Error: Something went wrong.'
  const expected = {
    type: 'SHOW_ERROR',
    message
  }

  const actual = showError(message)

  expect(actual).toEqual(expected)
})
