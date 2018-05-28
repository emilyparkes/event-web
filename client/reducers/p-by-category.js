import { RECEIVE_PUBLIC_EVENTS_BY_CATEGORY } from '../actions/p-by-category'

const initialState = []

const publicEventsByCategory = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PUBLIC_EVENTS_BY_CATEGORY:
      return action.event
    default:
      return state
  }
}

export default publicEventsByCategory
