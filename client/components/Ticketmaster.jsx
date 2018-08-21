import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { getApi } from '../actions/ticketmaster'

class Ticketmaster extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getApi())
  }

  render() {
    return (
      <div className='ticketmasterpg'>

        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Ticketmaster</h1>
          </div>
          <h6>Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.</h6>
        </div>


        <div className='page-section'>
          {this.props.ticketmaster.map(event =>
            <button key={event.id} className='events'>
              {event.name}
            </button>)}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    ticketmaster: state.ticketmaster
  }
}


export default connect(mapStateToProps)(Ticketmaster)