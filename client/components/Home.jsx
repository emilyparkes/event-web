import React from 'react'
import { connect } from 'react-redux'
import { getApi } from '../actions/ticketmaster'


import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getApi())
  }

  render() {
    return (
      <div className='homepg'>
        <div className='page-heading-section'>
          <div className='page-title-font'>
            <h1>Home</h1>
          </div>
          <h6>Do you want to eventify your life? To make it fuller and brighter? Find your ideal events here.</h6>
        </div>


        <div className='page-section'>
          <Link to={'/public-events'}>
            <button className='pevent-buttons'>
              Public Events
              </button>
          </Link>

        </div>
        <div className='page-section'>
          <Link to={'/local-events'}>
            <button className='levent-buttons'>
              Local Events
              </button>
          </Link></div>

        {this.props.ticketmaster.name}

        {/* <div className='page-section'>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }</div> */}

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    ticketmaster: state.ticketmaster
  }
}


export default connect(mapStateToProps)(Home)
