import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCategories} from '../../actions/categories/categories'

class Categories extends React.Component {
  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Categories</h1></div>
        </div>

        <div className='page-section'>
          {this.props.categories.map(category =>
            <Link key={category.id} to={`/categories/${category.categoryName}`} >
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
