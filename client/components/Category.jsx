import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPublicEventsByCategory } from '../actions/p-by-category'
import { getLocalEventsByCategory } from '../actions/l-by-category'

export class Category extends React.Component {
  // get all events associated with that category
  componentDidMount() {
    this.props.dispatch(getPublicEventsByCategory(this.props.match.params.category))
    this.props.dispatch(getLocalEventsByCategory(this.props.match.params.category))
  }


  render() {
    console.log(this.props)
    return (
      <div className='categoriespg' >

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h3>Category related events</h3>
            <h2>{this.props.match.params.category}</h2></div>
        </div>
        
        <div className='page-section' >

        {/* public events */}
          <div className='public-section' >
            {this.props.publicEventsByCategory.map(pEvents =>
              <Link key={pEvents.id} to={`/events/${this.props.match.params.category}/${pEvents.eventName}`} >
                <button className='categories-buttons'>
                  {pEvents.eventName}
                </button>
              </Link>
            )}
          </div>

          {/* local events */}
          <div className='local-section' >
            {this.props.localEventsByCategory.map(lEvents =>
              <Link key={lEvents.id} to={`/events/${this.props.match.params.category}/${lEvents.eventName}`} >
                <button className='categories-buttons'>
                  {lEvents.eventName}
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
    publicEventsByCategory: state.publicEventsByCategory,
    localEventsByCategory: state.localEventsByCategory
  }
}

export default connect(mapStateToProps)(Category)