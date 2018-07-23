import { 
  RECEIVE_CATEGORIES } from '../../actions/categories/categories'

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
