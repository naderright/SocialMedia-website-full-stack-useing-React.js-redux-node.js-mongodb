import React, { useRef, useState } from 'react'
import './PostShare.css'
import profile from '../../../img/profile.jpg'
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdPlayCircleOutline, MdOutlineLocationOn, MdEventNote } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { UploadImage, uploadPost } from '../../../Store/actions/UploadPostAction.js';
import { startLinkImage } from '../../../constants';



const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading);
    const [image,setImage]= useState(null);
    const imageRef = useRef();
    const desc = useRef();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.authReducer.authData);
    const onImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            setImage(img);
        }
        
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        const newPost = {
            userId :user._id,
            desc:desc.current.value
        }

        if (image) {
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append('name',filename);
            data.append('file',image);
            newPost.image = filename;
            console.log(newPost);
            try {
                dispatch(UploadImage(data));
            } catch (error) {
                console.log(error);
            }
           dispatch(uploadPost(newPost));
           restPost(); 
        }
    }
    const restPost = ()=>{
        setImage(null);
        desc.current.value='';
    }
    return (
        <div className='PostShare'>
            <img src={user.profilePicture?startLinkImage+user.coverPicture:profile} alt="" />
            <div>
                <input ref={desc} required type="text" placeholder='What is happing ?' name="" id="" />
                <div className="postOption">
                    <div className="option" onClick={()=>imageRef.current.click()} style={{color:'var(--photo)'}}>
                        <HiOutlinePhotograph />
                        <span>Photo</span>
                    </div>
                    <div className="option" style={{color:'var(--video)'}}>
                        <MdPlayCircleOutline />
                        <span>Video</span>
                    </div>
                    <div className="option" style={{color:'var(--location)'}}>
                        <MdOutlineLocationOn />
                        <span>Location</span>
                    </div>
                    <div className="option" style={{color:'var(--shedule)'}}>
                        <MdEventNote />
                        <span>Shedule</span>
                    </div>
                    <button  disabled={loading} onClick={handelSubmit} className='Button btn-share'>{loading?'Loading...':'Share'}</button>
                    <div className="chooosefile" style={{display:'none'}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} id="" />
                    </div>
                </div>
                {image&&<div className="previwImage">
                      <AiOutlineClose onClick={()=>setImage(null)} className='Postclose'/>
                      <img src={URL.createObjectURL(image)} alt="" />
                </div>}
            </div>

        </div>
    )
}

export default PostShare