import { SHOW_SUCCESS, SHOW_ERROR, CLEAR_ERROR } from '../actions/error'

const initialState = ''

const errorMessage = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SUCCESS:
      return action.message

    case SHOW_ERROR:
      return action.message

    case CLEAR_ERROR:
      return state

    default:
      return state
  }
}

export default errorMessage
