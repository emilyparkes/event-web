import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <div className='app-box'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
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
