import { useState } from 'react'
import './profile.sass'
import TopBar from './../TopBar'

function Profile () {
  let [userInfo] = useState({ loading: true })

  if (userInfo.loading) {
    return (
      <div className='container-not-found'>
        <TopBar />
        <div className='main-content'>
          <p className='main-text'>Carregando...</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-not-found'>
        <TopBar />
        <div className='main-content'>
          <p className='main-text'>User not found :</p>
        </div>
      </div>
    )
  }
}

export default Profile
