import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventsByCategoryId } from '../actions/categories'

export class Category extends React.Component {
  // get all events associated with that category
  componentDidMount() {
    this.props.dispatch(getPublicEventsByCategory(this.props.match.params.category))
  }


  render() {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>{this.props.match.params.category}</div>
        </div>

        <div className='categories-section' >
          {this.props.peventsbycategory.map(pEvents =>
            <Link key={pEvents.id} to={`/events/${this.props.match.params.category}/${pEvents.eventName}`} >
              <button className='categories-buttons'>
                {pEvents.eventName}
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
    peventsbycategory: state.peventsbycategory
  }
}

export default Category