import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getEventsByCategory} from '../../actions/categories/events-by-category'

export class Category extends React.Component {
  componentDidMount () {
    this.props.dispatch(getEventsByCategory(this.props.match.params.category))
  }

  render () {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h3>Category related events</h3>
            <h2>{this.props.match.params.category}</h2></div>
        </div>

        <div className='page-section' >
          <div className='section' >
            {this.props.eventsInCategory.map(event =>
              <Link key={event.event_id} to={`/categories/${this.props.match.params.category}/${event.eventName}`} >
                <button className='categories-buttons'>
                  {event.eventName}
                </button>
              </Link>
            )}
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eventsInCategory: state.eventsInCategory
  }
}

export default connect(mapStateToProps)(Category)
