import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import Header from './sections/Header'

import Home from './Home'

import Ticketmaster from './Ticketmaster'

import Register from './auth/Register'
import SignIn from './auth/SignIn'

import CreateEvent from './create-event/CreateEvent'
import Suggested from './Suggested'
import Discover from './Discover'
import Calendar from './Calendar'
import Profile from './Profile'

import ProfileEdit from './profile/ProfileEdit'

import PublicEventsList from './public-e/PublicEventsList'
import PublicEvent from './public-e/PublicEvent'

import LocalEventsList from './local-e/LocalEventsList'
import LocalEvent from './local-e/LocalEvent'

import Categories from './category/Categories'
import Category from './category/Category'
import EventFromCategory from './category/EventFromCategory'

// import Footer from './sections/Footer'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/events' component={Ticketmaster} />

          <Route path='/register' component={Register} />
          <Route path='/signin' component={SignIn} />
          <Route path='/create-event' component={CreateEvent} />

          <Route path='/suggested' component={Suggested} />
          <Route path='/discover' component={Discover} />
          <Route path='/calendar' component={Calendar} />

          <Route path='/profile/:username/edit' component={ProfileEdit} />
          <Route exact path='/profile/:username' component={Profile} />

          <Route path='/public-events/:eventName' component={PublicEvent} />
          <Route exact path='/public-events' component={PublicEventsList} />

          <Route path='/local-events/:eventName' component={LocalEvent} />
          <Route exact path='/local-events' component={LocalEventsList} />

          <Route path='/categories/:category/:eventName' component={EventFromCategory} />
          <Route path='/categories/:category' component={Category} />
          <Route exact path='/categories' component={Categories} />
        </Switch>
      </div>
    )
  }
}

export default App
