import { RECEIVE_EVENT_FROM_CATEGORY } from '../../actions/categories'

const initialState = {}

const eventFromCategory = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENT_FROM_CATEGORY:
      return action.eventFromCategory
    default:
      return state
  }
}

export default eventFromCategory
