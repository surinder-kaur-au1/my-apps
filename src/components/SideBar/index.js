import React from 'react';
import Card from '.././Ui/card';
import pic2 from '../../blogpost/pic2.jpg';
import './style.css';
const SideBar = () => {
    return (<div className="sideContainer">
        <Card style={{marginBottom:'20px'}}>
            <div className="cardHeader">
            <span>About us</span></div>
            <div className="profileImage"><img src={pic2} alt="profilepic" /></div>
            <div className="cardBody">
                <p className="personalBlog">Star Blogs is a software company which help customers to create and maintain their blogs.</p>
            </div>
        </Card>
        <Card  style={{marginBottom:'20px'}} className="cardHeader">
            <span className="">social network</span>
        </Card>
        <Card style={{marginBottom:'20px'}}>
            <div className="cardHeader">
            <span>Recent Posts</span></div>
            <div className="recentPosts">
                <div className="recentPost">
                    <h4>Post Title</h4>
                    <span>july 21, 2018</span></div></div></Card>
        </div>
      );
}
 
export default SideBar;