import React, { useState } from 'react';
import { NavLink  } from 'react-router-dom';
import './style.css';
const Navbar = () => {

    const [search, setSearch]= useState(false);

    const submitSearch= (e)=>{
        e.preventDefault();
        alert("search something");
    }


        const openSearch=()=>{
                setSearch(true);

        
    }


    const searchClass = search?"searchinput active":"searciInput";


    return (
        <div className="navbar">
        
                <ul className="navMenu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    <li><NavLink to="/post">Posts</NavLink></li>
                    
                </ul>
                <div className="search">
                    <form onSubmit={submitSearch}><input type="text" className={searchClass} placeholder="Search"/>
                <img onClick={openSearch} className="searchIcon" src="" alt="search"></img></form></div>
        </div>
      );
}
 
export default Navbar;