import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import ProfileEdit from './ProfileEdit'
import Profile from './Profile'
import PublicEventsList from './PublicEventsList'
import PublicEvent from './PublicEvent'
import LocalEventsList from './LocalEventsList'
import LocalEvent from './LocalEvent'
import Categories from './Categories'
import Category from './Category'
import EventByCategory from './EventByCategory'
import Footer from './Footer'

class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <div className='app-box'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile/edit' component={ProfileEdit} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-events/:eventName' component={PublicEvent} />
            <Route path='/local-events/:eventName' component={LocalEvent} />
            <Route path='/public-events' component={PublicEventsList} />
            <Route path='/local-events' component={LocalEventsList} />
            <Route path='/events/:category/:eventName' component={EventByCategory} />
            <Route path='/events/:category' component={Category} />
            <Route path='/events/categories' component={Categories} />

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
