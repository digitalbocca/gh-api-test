// import axios from 'axios'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './profile.sass'
import TopBar from './../TopBar'
import StarIcon from './../../assets/img/star-icon.svg'

function Profile () {
  let [userInfo, setUserInfo] = useState({ loading: false })

  const { id } = useParams()

  const history = useHistory()

  const handleSearch = slug => history.push(slug)

  const searchGhByUsername = async () => {
    try {
      // const result = await axios.get(`https://api.github.com/users/${userSlug}`)
      const result = { status: false }
      setUserInfo({ loading: false, ...result.data })
      console.log(userInfo)
    } catch (e) {
      console.log(e.message)
      handleSearch('not-found')
    }
  }

  // searchGhByUsername()

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
            <img src='https://picsum.photos/280/280' />
            <p>Profile</p>
          </div>
          <div className='repositories-wrapper'>
            <div>
              <h3 className='repo-name'>Lorem Ipsum</h3>
              <p className='repo-desc'>Lorem ipsum dolor...</p>
              <p className='repo-stars'>
                <img className='repo-icon' src={StarIcon} />
                1000
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
