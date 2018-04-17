import React from 'react'
import { Link } from 'react-router-dom'

import PublicEvents from './PublicEvents'
import LocalEvents from './LocalEvents'

import { getLocalEvents, getPublicEvents } from '../../server/db/db'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localEvents: [],
      publicEvents: [],
      errorMessage: ''
    }
    this.getPublicEvents = this.getPublicEvents.bind(this)
    this.getLocalEvents = this.getLocalEvents.bind(this)
  }

  componentWillMount() {
    this.getPublicEvents()
    this.getLocalEvents()
  }

  getPublicEvents() {
    return getPublicEvents()
      .then(publicEvents => {
        this.setState({ publicEvents: publicEvents })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  getLocalEvents() {
    return getLocalEvents()
      .then(localEvents => {
        this.setState({ localEvents: localEvents })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render() {
    return (
      <div className='homepg'>
        <h1>Home page with preferences based on selection.</h1>
        <div className='page-section'>
          <Link to={'/public-events'}>
            <PublicEvents
              events={this.state.publicEvents}
              getEvents={this.getPublicEvents} /></Link></div>

        <div className='page-section'>
          <Link to={'/local-events'}>
            <LocalEvents
              events={this.state.localEvents}
              getEvents={this.getLocalEvents} /></Link></div>

        <div className='page-section'>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }</div>

      </div>
    )
  }
}

export default Home