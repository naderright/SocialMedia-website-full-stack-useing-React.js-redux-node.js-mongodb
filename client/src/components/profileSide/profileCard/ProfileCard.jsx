import React from 'react'
import { useNavigate } from 'react-router-dom'
import './profileCard.css'
import cover from '../../../img/cover.jpg'
import profileImage from '../../../img/profile.jpg'
import { useSelector } from 'react-redux'
import { startLinkImage } from '../../../constants'
const ProfileCard = ({profilePage}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const  posts  = useSelector((state) => state.postReducer.posts);
  // console.log(user);
  const navigate = useNavigate();
  const profile = profilePage;
  const handelProfile = () => {
    navigate(`/profile/${user._id}`);
  }
  return (
    <div className='profileCard'>
      <div className="profileImages">
        <img src={user.coverPicture ? startLinkImage + user.coverPicture : cover} alt="" />
        <img src={user.profilePicture ? startLinkImage + user.profilePicture : profileImage} alt="" />
      </div>
      <div className="profileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : 'write about your self'}</span>
      </div>


      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>followers</span>
          </div>
          {profile && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post)=>post.userId === user._id).length}</span>
                <span>posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
        {profile ? '' : <span onClick={handelProfile}>My Profile</span>}

      </div>
    </div>
  )
}

export default ProfileCard