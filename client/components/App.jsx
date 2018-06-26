import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './sections/Header'

import Home from './Home'
import Popular from './Popular'
import AklMap from './AklMap'
import Calendar from './Calendar'
import Profile from './Profile'

import ProfileEdit from './profile/ProfileEdit'

import PublicEventsList from './public-e/PublicEventsList'
import PublicEvent from './public-e/PublicEvent'

import LocalEventsList from './local-e/LocalEventsList'
import LocalEvent from './local-e/LocalEvent'

import Categories from './category/Categories'
import Category from './category/Category'
import EventByCategory from './category/EventByCategory'

import Footer from './sections/Footer'

class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <Header />
        <div className='app-box'>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/popular' component={Popular} />
            <Route path='/map' component={AklMap} />
            <Route path='/calendar' component={Calendar} />
            
            <Route path='/profile/edit' component={ProfileEdit} />
            <Route path='/profile' component={Profile} />

            <Route path='/public-events/:eventName' component={PublicEvent} />
            <Route path='/public-events' component={PublicEventsList} />

            <Route path='/local-events/:eventName' component={LocalEvent} />
            <Route path='/local-events' component={LocalEventsList} />

            <Route path='/events/categories' component={Categories} />
            <Route path='/events/:category/:eventName' component={EventByCategory} />
            <Route path='/events/:category' component={Category} />
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
