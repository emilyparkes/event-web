import { RECEIVE_LOCAL_EVENT_BY_CATEGORY } from '../actions/l-by-category'

const initialState = []

const localEventsByCategory = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOCAL_EVENT_BY_CATEGORY:
      return action.event
    default:
      return state
  }
}

export default localEventsByCategory
