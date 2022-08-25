import React from 'react'
import './Posts.css'
import { useParams } from 'react-router-dom'
// import { PostsData } from '../../Data/PostsDada'
import Post from '../Post/Post.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTimeLinePosts } from '../../../Store/actions/PostsAction.js'

//import { useState } from 'react'
const Posts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts } = useSelector((state) => state.postReducer);
  //const[postsShow,setPostsShow] = useState([]);
  // console.log(posts);
  
  useEffect(() => {
   const getTimLine=()=> dispatch(getTimeLinePosts(user._id));
   getTimLine()
  }, [])

  return (
    <div className="Posts">
      {params.id ? !posts ? 'Fetching data...' : posts.map((post, id) => {
        if (params.id === post.userId) {
          return <Post data={post} key={id} />
        } else {
          return 'no posts';
        }
      }) : !posts ? 'Fetching data...' : posts.map((post, id) => {
        if (user._id === post.userId || user.following.includes(post.userId)) {
          return <Post data={post} key={id} />
        }

      })}
     
     
    </div>
  )
}

export default Posts