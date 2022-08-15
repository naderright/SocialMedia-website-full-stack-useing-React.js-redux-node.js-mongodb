import React, { useState } from 'react'
import './InfoCard.css'
import { FaPencilAlt } from "react-icons/fa";
import ProfileModal from '../../ProfileModel/ProfileModel';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as ApiUser from '../../../Store/api/userRequest.js'
import UpdatPro from './updatPro';

const InfoCard = () => {
    const [modelOpened, setModalOpened] = useState(false);
    const dispatch = useDispatch();
    const params = useParams()
    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData);

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId == user._id) {
                setProfileUser(user);
            } else {
                const profileUser = await ApiUser.getUser(profileUserId);
                setProfileUser(profileUser);
            }
        }
        fetchProfileUser();
    }, [user])

    const handelLogout = () => {
        dispatch({ type: 'LOG_OUT' });
    }
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>profile Info</h4>
                <div><FaPencilAlt onClick={() => setModalOpened(true)} />
                    {modelOpened ? <UpdatPro data={user} setModalOpened={setModalOpened} className='updatePro' /> : ''}

                    {/* {user._id === profileUserId ? <div><FaPencilAlt onClick={() => setModalOpened(true)} />
                    <ProfileModal modelOpened={modelOpened} setModalOpened={setModalOpened} data={user}/>
                </div> : ''} */}
                </div>
            </div>
            <div className="info">
                <span><b>Status </b></span>
                <span>{profileUser.relationship}</span>
            </div>

            <div className="info">
                <span><b>Lives in </b></span>
                <span>{profileUser.livesin}</span>
            </div>

            <div className="info">
                <span><b>Works at </b></span>
                <span>{profileUser.worksAt}</span>
            </div>


            <button className="Button btn-logout" onClick={handelLogout}>LogOut</button>
        </div>
    )
}

export default InfoCard