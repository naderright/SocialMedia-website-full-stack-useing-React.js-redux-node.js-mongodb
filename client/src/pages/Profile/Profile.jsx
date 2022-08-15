import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/profileSide/profileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>
        <div className="profileCenter">
            <ProfileCard profilePage='profilePage'/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile