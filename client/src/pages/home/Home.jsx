import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './home.css'
const Home = () => {
 
  return (
    <div className='home'>
          <ProfileSide/>
          <PostSide />
          <RightSide/>
    </div>
  )
}

export default Home