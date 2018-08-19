import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { getEventfindaApi } from '../actions/eventfinda'

class Eventfinda extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getEventfindaApi())
  }

  render() {
    return (
      <div className='Eventfindapg'>
        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Eventfinda</h1>
          </div>
          <h6>Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.</h6>
        </div>


        <div className='page-section'>
        {this.props.eventfinda.name}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    eventfinda: state.eventfinda
  }
}


export default connect(mapStateToProps)(Eventfinda)