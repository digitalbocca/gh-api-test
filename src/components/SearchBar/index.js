import './search-bar.sass'
import SearchIcon from './../../assets/img/search-icon.svg'

function SearchBar () {
  return (
    <div className='search-bar'>
      <input className='search-input' type='text' />
      <button className='search-button'>
        <img src={SearchIcon} alt='search' />
      </button>
    </div>
  )
}

export default SearchBar
