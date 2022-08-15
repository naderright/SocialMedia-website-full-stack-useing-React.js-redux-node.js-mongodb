import React from 'react'
import ProfileCard from './profileCard/ProfileCard.jsx'
import Followerscard from './FollowersCard/FollowersCard.jsx'

import './profile.css'
import Search from './Search/Search'
const ProfileSide = () => {
  return (
    <div className='profileSide'>
       <Search/>
       <ProfileCard/>
       <Followerscard/>
    </div>
  )
}

export default ProfileSide