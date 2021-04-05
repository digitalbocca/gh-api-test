import { useState } from 'react'
import './search-bar.sass'
import SearchIcon from './../../assets/img/search-icon.svg'

function SearchBar () {
  let [ghSlug, setGhSlug] = useState('')

  return (
    <div className='search-bar'>
      <input className='search-input' type='text' value={ghSlug} onChange={e => setGhSlug(e.target.value)} />
      <button className='search-button' onClick={() => console.log(ghSlug)}>
        <img src={SearchIcon} alt='search' />
      </button>
    </div>
  )
}

export default SearchBar
