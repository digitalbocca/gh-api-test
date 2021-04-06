import axios from 'axios'
import { useState } from 'react'
import './profile.sass'
import TopBar from './../TopBar'

function Profile () {
  let [userInfo, setUserInfo] = useState({ loading: true })

  const userSlug = window.location.pathname.split('/')[2]

  const searchGhByUsername = async () => {
    try {
      const result = await axios.get(`https://api.github.com/users/${userSlug}`)
      setUserInfo({ loading: false, ...result.data })
      console.log(userInfo)
    } catch (e) {
      /**
       * @todo Tratar o erro, pois tanto o 404 como o 403 (Problemas com o limite da API) 
       * está redirecionando para o NotFound.
       */
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
        <div className='profile-wrapper'>
          <div className='profile-side-bar'>
            <p>Profile</p>
          </div>
          <div className='repositories-wrapper'>
            <p>repositories</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
