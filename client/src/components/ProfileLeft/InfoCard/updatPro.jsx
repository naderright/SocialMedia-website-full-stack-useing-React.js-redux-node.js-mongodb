import React from 'react'
import './updatPro.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { UploadImage } from "../../../Store/actions/UploadPostAction";
import { updateUser } from "../../../Store/actions/userAction.js";

const UpdatPro = ({data,setModalOpened}) => {

    const {password,...other} = data;
    const [formData,setFormData ] = useState(other);
    const [profileImage,setProfileImage ] = useState(null);
    const [coverImage,setCoverImage ] = useState(null);
    const dispatch = useDispatch();
    const param = useParams();
    //const {user} = useSelector((state)=>state.authReducer.authData);
     
    const handelChange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
      //console.log(formData);
    }
  
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        event.target.name === "profileImage"
          ? setProfileImage(img)
          : setCoverImage(img);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //let UserData = formData;
      if (profileImage) {
        const data = new FormData();
        const fileName = Date.now() + profileImage.name;
        data.append("name", fileName);
        data.append("file", profileImage);
        formData.profilePicture = fileName;
        try {
          dispatch(UploadImage(data));
        } catch (err) {
          console.log(err);
        }
      }
      if (coverImage) {
        const data = new FormData();
        const fileName = Date.now() + coverImage.name;
        data.append("name", fileName);
        data.append("file", coverImage);
        formData.coverPicture = fileName;
        try {
          dispatch(UploadImage(data));
        } catch (err) {
          console.log(err);
        }
      }
      dispatch(updateUser(param.id,formData ));

      setModalOpened(false);
      console.log(formData);
    };

  return (
    <div className='updatPro'>
        <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handelChange}
            //value={formData.firstname}
          />

          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handelChange}
            //value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handelChange}
            //value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="LIves in"
            onChange={handelChange}
            //value={formData.livesin}
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handelChange}
            //value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="relationShip"
            placeholder="RelationShip Status"
            onChange={handelChange}
            //value={formData.relationShip}
          />
        </div>


        <div>
            Profile Image 
            <input type="file" name='profileImage'onChange={onImageChange}/>
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange}/>
        </div>

        <button className="button infoButton" onClick={handleSubmit}>Update</button>
      </form>

    </div>
  )
}

export default UpdatPro