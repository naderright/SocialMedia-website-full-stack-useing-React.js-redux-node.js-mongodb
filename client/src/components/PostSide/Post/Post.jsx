import React from 'react'
import './Post.css'
import { FaRegCommentDots, FaRegShareSquare, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { startLinkImage } from '../../../constants.js';
import { useState } from 'react';
import { likePost } from '../../../Store/api/PostRequest';
import profile from '../../../img/profile.jpg';
import { useEffect } from 'react';
import { getUser } from '../../../Store/api/userRequest';
import { useRef } from 'react';
import { addComment } from '../../../Store/actions/PostsAction';
import ShowCommentsPopUp from './ShowCommentsPopUp.jsx';

const Post = ({ data }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData);
    const { comments } = useSelector((state) => state.commentReducer);
    //console.log(comments);
    const commentRef = useRef();
    const [userPost, setUserPost] = useState({});
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);
    const [commentsPost, setCommentsPost] = useState(0);
    const [allcommentsPost, setallCommentsPost] = useState([]);
    const [showComments, setShowComments] = useState(false);
    // const comments = 0;

    //console.log(allcommentsPost);
    const handelLike = () => {
        setLiked((prev) => !prev);
        likePost(data._id, user._id);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }

    const getComments = () => {
        const currentComments = comments.map((comment) => {
            return comment.comment;
        });
        const currentCommentsPost = currentComments.filter((comment)=>{
            return comment.postId === data._id;
        });
        if (currentCommentsPost.length>0) {
            setCommentsPost(currentCommentsPost.length);
            setallCommentsPost(currentCommentsPost)
        } else {
            setCommentsPost(0) 
        }
  
    };

    const handelSubmitComment = (e) => {
        e.preventDefault();
        const newComment = {
            username:user.username,
            userId: user._id,
            postId: data._id,
            text: commentRef.current.value
        };
        if (user.profilePicture) {
            newComment.userProfile = user.profilePicture;
        }
        //console.log(newComment);
        dispatch(addComment(newComment));
        getComments();
        commentRef.current.value = '';
    }

    const handeleGetComments = ()=>{
        if (commentsPost > 0) {
            setShowComments(true);
           
        }
    }
    useEffect(() => {
        const userPost = async () => {
            const user = await getUser(data.userId)
            setUserPost(user.data);
        };

       // getComments();
        userPost();
    }, [data])
    useEffect(()=>{
        getComments();
    },[comments])
    //console.log(showComments);
    return (
        <div className="Post">
            <div className="userAcount">
                <img src={userPost.profilePicture ? startLinkImage + userPost.profilePicture : profile} alt="" />
                <h3>{userPost.username}</h3>
            </div>
            <div className="details">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
            <img src={data.image ? startLinkImage + data.image : ''} alt="" />
            <div className="postReact">
                {liked ? <div className="heart" >
                    <FaRegHeart onClick={handelLike} style={{ color: 'red', cursor: 'pointer' }} />
                </div> : <FaRegHeart onClick={handelLike} style={{ cursor: 'pointer', fontSize: '1.5rem' }} />}
                <FaRegCommentDots style={{ cursor: 'pointer', fontSize: '1.5rem' }} />
                <FaRegShareSquare style={{ cursor: 'pointer', fontSize: '1.5rem' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--gray)', fontSize: '13px',fontWeight:'bold' }}>{likes} Likes</span>
                <span onClick={handeleGetComments} className='commentsClick' style={{transition:'all .3s' ,color: 'var(--gray)', fontSize: '13px',fontWeight:'bold',cursor:'pointer'}}>{commentsPost} comments</span>
            </div>
            <div className="commentInp">
                <img src={user.profilePicture ? startLinkImage + user.profilePicture : profile} alt="" />
                <form onSubmit={handelSubmitComment}>
                    <input type="text" placeholder='write acomment' ref={commentRef} />
                    <button type="submit" style={{ display: 'none' }}></button>
                </form>
            </div>

    {showComments?<ShowCommentsPopUp setShowComments={setShowComments} data={data}  comments={allcommentsPost}/>:''}

        </div>
    )
}

export default Post