import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import EditProfile from './EditProfile'
import Profile from './Profile'
import PublicEvents from './PublicEvents'
import LocalEvents from './LocalEvents'
import Footer from './Footer'

class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <div className='app-box'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile/edit' component={EditProfile} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-events' component={PublicEvents} />
            <Route path='/local-events' component={LocalEvents} />
            <Route path='/events/concerts' component={LocalEvents} />
            <Route path='/events/gigs' component={LocalEvents} />
            <Route path='/events/festivals' component={LocalEvents} />
            <Route path='/events/art' component={LocalEvents} />
            <Route path='/events/theatre' component={LocalEvents} />
            <Route path='/events/food' component={LocalEvents} />
            <Route path='/events/markets' component={LocalEvents} />
            <Route path='/events/city-pop-ups' component={LocalEvents} />
            <Route path='/events/community' component={LocalEvents} />
            
          </Switch>
        </div>
        <div className='sticky-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
