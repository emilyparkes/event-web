import { RECEIVE_CATEGORIES } from '../actions/categories'
import { RECEIVE_PEVENTS_BY_CATEGORIES } from '../actions/categories'

const initialState = []

const categories = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export default categories

const peventsByCategory = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PEVENTS_BY_CATEGORIES:
      return action.pEventsByCategory
    default:
      return state
  }
}

export default peventsByCategory