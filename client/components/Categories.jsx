import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories } from '../actions/categories'

class Categories extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCategories())
  }

  render() {
    return (
      <div className='categoriespg' >
        <h1>Categories</h1>

        <div className='page-section'>
          {this.props.categories.map(category =>
            <Link key={category.id} to={`/events/${category.categoryName}`} >
              <button className='categories-buttons'>
                {category.categoryName}
              </button>
            </Link>
          )}
        </div>
        
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