import axios from 'axios'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './profile.sass'
import TopBar from './../TopBar'

import StarIcon from './../../assets/img/star-icon.svg'
import Organization from './../../assets/img/organization-icon.svg'
import Location from './../../assets/img/location-icon.svg'
import Repositories from './../../assets/img/repositories-icon.svg'
import Followers from './../../assets/img/followers-icon.svg'

function Profile () {
  let [userInfo, setUserInfo] = useState({ loading: true })
  let [repos, setRepos] = useState([])

  const { id } = useParams()

  const history = useHistory()

  const handleSearch = slug => history.push(slug)

  const searchGhByUsername = async () => {
    try {
      const result = await axios.get(`https://api.github.com/users/${id}`)
      // const result = { status: false }
      await setUserInfo({ loading: false, ...result.data })
      
      const findRepos = await axios.get(`${userInfo.repos_url}`)
      await setRepos(findRepos.data)
    } catch (e) {
      console.log(e.message)
      handleSearch('/not-found')
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
            <img className='avatar' src={userInfo.avatar_url} alt='Profile' />
            <p className='profile-name'>{userInfo.name}</p>
            <p className='profile-text profile-username'>{userInfo.login}</p>
            <p className='profile-text'>
              <img className='profile-icons' src={Organization} alt='Organization' />
              {userInfo.company}
            </p>
            <p className='profile-text'>
              <img className='profile-icons' src={Location} alt='Location' />
              {userInfo.location}
            </p>
            <p className='profile-text'>
              <img className='profile-icons' src={StarIcon} alt='Stars' />
              25
            </p>
            <p className='profile-text'>
              <img className='profile-icons' src={Repositories} alt='Repositories' />
              {userInfo.public_repos}
            </p>
            <p className='profile-text'>
              <img className='profile-icons' src={Followers} alt='Followers' />
              {userInfo.followers}
            </p>
          </div>
          <div className='repositories-wrapper'>
            <div>
              {repos.map(repo => {
                return(
                  <>
                  <h3 className='repo-name'>{repo.name}</h3>
                  <p className='repo-desc'>{repo.description}</p>
                  <p className='repo-stars'>
                    <img className='repo-icon' src={StarIcon} alt='stars' />
                    {repo.stargazers_count}
                  </p>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
