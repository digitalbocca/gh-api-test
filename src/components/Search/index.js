import './search.sass'

function App () {
  return (
    <div className='search-container'>
      <div className='logo'>
        <p className='title'>
          Github
          <span className='sub-title'>Search</span>
        </p>
      </div>
      <div className='search-bar'>
        <div className='search-input'>
          <input type='text' />
        </div>
        <button className='search-button'>Pesquisar</button>
      </div>
    </div>
  )
}

export default App
