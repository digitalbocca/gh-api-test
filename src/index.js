import React from 'react'
import ReactDOM from 'react-dom'

import './assets/sass/styles.sass'
import reportWebVitals from './reportWebVitals'

// import Search from './components/Search'
import NotFound from './components/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <NotFound />
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
