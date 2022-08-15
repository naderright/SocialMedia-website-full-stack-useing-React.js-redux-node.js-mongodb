import React from 'react'
import './Post.css'
import { FaRegCommentDots, FaRegShareSquare, FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { startLinkImage } from '../../../../constants.js';
import { useState } from 'react';
import { likePost } from '../../../../Store/api/PostRequest';


const Post = ({data}) => {
    const{user}= useSelector((state)=>state.authReducer.authData);
    // console.log(data);
    
    const[liked,setLiked] = useState(data.likes.includes(user._id));
    const[likes,setLikes] = useState(data.likes.length);

    const handelLike = ()=>{
        setLiked((prev)=>!prev);
        likePost(data._id,user._id);
        liked?setLikes((prev)=>prev-1):setLikes((prev)=>prev+1)
    }
    

    return (
        <div className="Post">
            <img src={data.image?startLinkImage+data.image:''} alt="" />
            <div className="postReact">
                {liked ? <div className="heart" >
                    <FaRegHeart onClick={handelLike} style={{ color: 'red' ,cursor:'pointer'}} />
                </div> : <FaRegHeart onClick={handelLike} style={{ cursor:'pointer'}}/>}
                <FaRegCommentDots style={{ cursor:'pointer'}}  />
                <FaRegShareSquare style={{ cursor:'pointer'}}/>
            </div>
            <span style={{color:'var(--gray)',fontSize:'12px'}}>{likes} Likes</span>
            <div className="details">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}

export default Post