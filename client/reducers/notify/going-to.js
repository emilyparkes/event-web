import {
  RECEIVE_GOING_TO_LIST } from '../../actions/notify/going-to'

const initialState = []

const goingTo = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GOING_TO_LIST:
      return action.goingTo
    default:
      return state
  }
}

export default goingTo
