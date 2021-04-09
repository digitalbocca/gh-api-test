import './not-found.sass'
import TopBar from './../TopBar'

function NotFound () {
  return (
    <div className='container-not-found'>
      <TopBar />
      <div className='main-content'>
        <p className='main-text'>User not found :(</p>
        <p className='text-center'>Tente novamente mais tarde, pois podemos ter atingido nossa quota de requisições.</p>
      </div>
    </div>
  )
}

export default NotFound
