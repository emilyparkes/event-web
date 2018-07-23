import React from 'react'
import { connect } from 'react-redux'

import { getEventFromCategory } from '../../actions/event-from-category'

export class EventByCategory extends React.Component {
  constructor(props) {
    super(props)
  }

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
          {this.props.eventFromCategory.date}
          {this.props.eventFromCategory.time}
          {this.props.eventFromCategory.location}
          {this.props.eventFromCategory.address}
          {this.props.eventFromCategory.tickets}
          {this.props.eventFromCategory.website}
          {this.props.eventFromCategory.blurb}
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
