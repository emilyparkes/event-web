import React from 'react'
import {connect} from 'react-redux'

import {getEventFromCategory} from '../../actions/categories/event-from-category'

export class EventByCategory extends React.Component {
  componentDidMount () {
    this.props.dispatch(getEventFromCategory(this.props.match.params.category, this.props.match.params.eventName))
  }

  render () {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>{this.props.match.params.eventName}</h1></div>
        </div>

        <div className='page-section' >
          {this.props.eventFromCategory.description}
          {this.props.eventFromCategory.date_start}
          {this.props.eventFromCategory.date_end}
          {this.props.eventFromCategory.time_start}
          {this.props.eventFromCategory.time_end}
          {this.props.eventFromCategory.access}
          {this.props.eventFromCategory.tickets}
          {this.props.eventFromCategory.restrictions}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eventFromCategory: state.eventFromCategory
  }
}

export default connect(mapStateToProps)(EventByCategory)
