import './search.sass'
import SearchBar from './../SearchBar'

function App () {
  return (
    <div className='search-container'>
      <div className='logo'>
        <p className='title'>
          Github
          <span className='sub-title'>Search</span>
        </p>
        <SearchBar />
      </div>
    </div>
  )
}

export default App
