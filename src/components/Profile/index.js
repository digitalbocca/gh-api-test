import axios from 'axios'
import { useState } from 'react'
import './profile.sass'
import TopBar from './../TopBar'

function Profile () {
  let [userInfo] = useState({ loading: true })

  const userSlug = window.location.pathname.split('/')[2]

  const searchGhByUsername = async () => {
    try {
      const result = await axios.get(`https://api.github.com/users/${userSlug}`)
    } catch (e) {
      console.log(e.message)
      window.location.replace(`${window.location.origin}/not-found`)
    }
  }

  searchGhByUsername()

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
