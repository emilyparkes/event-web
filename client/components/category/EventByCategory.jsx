import React from 'react'
import { connect } from 'react-redux'

import { getEventFromCategory } from '../../actions/event-from-category'

export class EventByCategory extends React.Component {
  // get all events associated with that EventByCategory
  componentDidMount() {
    this.props.dispatch(getEventFromCategory(this.props.match.params.category, this.props.match.params.eventName))
  }


  render() {
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
          <h1>{this.props.match.params.eventName}</h1></div>
        </div>

        <div className='page-section' >
          {event.date}
          {event.time}
          {event.location}
          {event.address}
          {event.tickets}
          {event.website}
          {event.blurb}
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
