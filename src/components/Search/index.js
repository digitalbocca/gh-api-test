import './search.sass'
import SearchBar from './../SearchBar'
import Logo from './../Logo'
import React from 'react'

function App () {
  return (
    <div className='search-container'>
      <React.Fragment>
        <Logo />
        <SearchBar />
      </React.Fragment>
    </div>
  )
}

export default App
