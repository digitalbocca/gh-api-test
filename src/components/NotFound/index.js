import './not-found.sass'
import TopBar from './../TopBar'

function NotFound () {
  return (
    <div className='container-not-found'>
      <TopBar />
      <div className='main-content'>
        <p className='main-text'>User not found :(</p>
      </div>
    </div>
  )
}

export default NotFound
