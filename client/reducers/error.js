import { SHOW_ERROR, CLEAR_ERROR } from '../actions/error'

const initialState = ''

const error = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    case CLEAR_ERROR:
      return state

    default:
      return state
  }
}

export default error