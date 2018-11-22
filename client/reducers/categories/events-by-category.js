import {
  RECEIVE_EVENTS_BY_CATEGORY} from '../../actions/categories/events-by-category'

const initialState = []

const eventsInCategory = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS_BY_CATEGORY:
      return action.eventsInCategory
    default:
      return state
  }
}

export default eventsInCategory
