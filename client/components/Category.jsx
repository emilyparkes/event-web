import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventsByCategoryId } from '../actions/categories'

export class Category extends React.Component {
  // get all events assosiated with that category
  componentDidMount() {
    this.props.dispatch(getPublicEventsByCategoryId(this.props.match.params.category))
  }


  render() {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>{this.props.match.params.category}</div>
        </div>

        <div className='categories-section' >
          {this.props.publicEvents.map(pEvent =>
            <Link key={pEvent.id} to={`/events/${this.props.match.params.category}/${pEvent.eventName}`} >
              <button className='categories-buttons'>
                {pEvent.eventName}
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
    publicEvents: state.publicEvents
  }
}

export default Category