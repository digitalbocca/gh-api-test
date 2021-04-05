import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './assets/sass/styles.sass'
import reportWebVitals from './reportWebVitals'

import Search from './components/Search'
import Profile from './components/Profile'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/profiles/:id'>
          <Profile />
        </Route>
        <Route path='/'>
          <Search />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
