import React from 'react'
import './Search.css'
import Logo from '../../../img/logo.png'
import { FaSearch } from "react-icons/fa";
const Search = () => {
    return (
        <div className='search'>
            <img className='logoSite' src={Logo} alt="" />
            <div className="inputSearch">
                <input type="text" placeholder='#Explore' name="" id="" />
                <div className="s-icon">
                    <FaSearch />
                </div>
            </div>

        </div>
    )
}

export default Search