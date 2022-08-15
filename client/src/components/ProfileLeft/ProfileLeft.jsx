import React from 'react'
import Followerscard from '../profileSide/FollowersCard/FollowersCard'
import Search from '../profileSide/Search/Search'
import InfoCard from './InfoCard/InfoCard'
import './ProfileLeft.css'
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <Search/>
        <InfoCard/>
        <Followerscard/>
    </div>
  )
}

export default ProfileLeft