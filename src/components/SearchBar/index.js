import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './search-bar.sass'
import SearchIcon from './../../assets/img/search-icon.svg'

function SearchBar () {
  let [ghSlug, setGhSlug] = useState('')

  const history = useHistory()

  const handleSearch = slug => history.push(slug)

  return (
    <div className='search-bar'>
      <input className='search-input' type='text' value={ghSlug} onChange={e => setGhSlug(e.target.value)} />
      <button className='search-button' onClick={() => {
        handleSearch(`profiles/${ghSlug}`)
        // window.location.replace(`${window.location.origin}/#/profiles/${ghSlug}`)
      }}>
        <img src={SearchIcon} alt='search' />
      </button>
    </div>
  )
}

export default SearchBar
