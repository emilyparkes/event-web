import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPublicEventsByEventByCategory } from '../../actions/categories'

export class EventByCategory extends React.Component {
  // get all events associated with that EventByCategory
  componentDidMount() {
    this.props.dispatch(getPublicEventsByEventByCategory(this.props.match.params.EventByCategory))
  }


  render() {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
          <h1>{this.props.match.params.EventByCategory}</h1></div>
        </div>

        <div className='page-section' >
          {this.props.peventsbyEventByCategory.map(pEvents =>
            <Link key={pEvents.id} to={`/events/${this.props.match.params.EventByCategory}/${pEvents.eventName}`} >
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
    peventsbyEventByCategory: state.peventsbyEventByCategory
  }
}

export default connect(mapStateToProps)(EventByCategory)
