import './top-bar.sass'
import MiniLogo from './../MiniLogo'
import SearchBar from './../SearchBar'

import React from 'react'

function TopBar () {
  return (
    <div className='container-top-bar'>
      <React.Fragment>
        <MiniLogo />
        <SearchBar />
      </React.Fragment>
    </div>
  )
}

export default TopBar
