import React from 'react'
import ReactDOM from 'react-dom'

import { Switch, Route, HashRouter } from 'react-router-dom'

import './assets/sass/styles.sass'
import reportWebVitals from './reportWebVitals'

import Search from './components/Search'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path='/not-found'>
          <NotFound />
        </Route>
        <Route path='/profiles/:id'>
          <Profile />
        </Route>
        <Route path='/'>
          <Search />
        </Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
