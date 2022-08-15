import React, { useState } from 'react'
import './RightSide.css'
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { FaCog } from "react-icons/fa";
import TrendCard from './TrendCard/TrendCard';
import ShareModal from '../ShareModel/ShareModel';
import { Link } from 'react-router-dom';


const RightSide = () => {
  const[modelOpened,setModalOpened] = useState(false);

  return (
     <div className="RightSide">
          <div className="navIcons">
            <Link to='/home'><img className='homeLogo' src={Home} alt="" /></Link>
            <FaCog style={{fontSize:"20px"}}/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
          </div>
          <TrendCard/>
          <button onClick={()=>setModalOpened(true)} className="Button btn-Rightside">
            Share
          </button>
          <ShareModal modelOpened={modelOpened} setModalOpened={setModalOpened} />
     </div>
  )
}

export default RightSide