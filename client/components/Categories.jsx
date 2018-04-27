import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories } from '../actions/categories'

export class Categories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getCategories(this.state.categories))
  }

  render () {
    return (
      <div className='categoriespg' >
        {this.props.categories.map(category =>
          <Link key={category.id} to={`/events/${category.categoryName}`} >
            <button className='categories-buttons'>
              {category.categoryName}
            </button>
          </Link>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Categories)