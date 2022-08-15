import React from 'react'
import './FollowersCard.css'
// import { Followers } from '../../Data/FollowersData'
import profileImage from '../../../img/profile.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUser } from '../../../Store/api/userRequest'
import { startLinkImage } from '../../../constants'
import { followUser, unfollowUser } from '../../../Store/actions/userAction'
const Followerscard = () => {
  const [persons, setPersons] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [followingUser, setFollowingUser] = useState(false);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data.filter((person) => person._id !== user._id));

    }
    fetchPersons();
  }, [])
  //console.log(followingUser);
  const handlefollow = (person) => {
    if (!user.following.includes(person._id)) {
      dispatch(followUser(person._id, user))
      setFollowingUser(true)
    } else {
      dispatch(unfollowUser(person._id, user))
      setFollowingUser(false)
    }

  }
  
  return (
    
    <div className='followersCard'>
      <h3>People you may know</h3>
      {persons ? persons.map((person, id) => {
        if (person._id !== user._id) {
          return <div key={id} className="follower">
            <div>
              <img src={person.profilePicture ? startLinkImage + person.profilePicture : profileImage} className='followerImg' alt="" />
              <div className="name">
                <span>{person.firstname}</span>
                <span>{person.username}</span>
              </div>
            </div>
            {persons.map((person , id) => 
            <button key={id} className={person.followers.includes(user._id) || followingUser ? 'Button btn-unfollow' : 'Button btn-follower'} onClick={() => handlefollow(person)}>
                {person.followers.includes(user._id) || followingUser ? 'unFollow' : 'follow'}</button>
            )}

          </div>
        }
      }) : ''}
    </div>
  )
}

export default Followerscard