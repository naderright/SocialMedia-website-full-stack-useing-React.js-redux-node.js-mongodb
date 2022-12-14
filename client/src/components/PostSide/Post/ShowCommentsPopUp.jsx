import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLinkImage } from '../../../constants';
import { addComment } from '../../../Store/actions/PostsAction';
import profile from '../../../img/profile.jpg';
import './ShowCommentsPopUp.css';
import { BiMessageSquareX } from "react-icons/bi";
import { useEffect } from 'react';
import { useState } from 'react';

const ShowCommentsPopUp = ({ setShowComments, data, comments }) => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const commentRef = useRef();

    const [allComments ,setAllComments] = useState([]);


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
    

    }

    const handleCloseComments = () => {
        setShowComments(false)
    };

    useEffect(()=>{
        setAllComments(comments)
    },[comments])


    return (
        <div className='ShowComments'>

            <div className="comments">
                <div className="headComments">
                    <h2>Comments Of The Post</h2>
                    <BiMessageSquareX onClick={handleCloseComments} className='closeIcon' />
                </div>
                <div className="miidelCommentsPop">
                    {allComments.map((comment) => <div className="comment">

                        <div className="ownerComment">
                            <img src={comment.userProfile ? startLinkImage + comment.userProfile : profile} alt="" />
                            <span>{comment.username}</span>
                        </div>

                        <p>{comment.text}</p>
                    </div>)}

                </div>

                <div className='writeComment'>
                    <img src={user.profilePicture ? startLinkImage + user.profilePicture : profile} alt="" />
                    <form onSubmit={handelSubmitComment}>
                        <input type="text" placeholder='write acomment' ref={commentRef} />
                        <button type="submit" style={{ display: 'none' }}></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ShowCommentsPopUp