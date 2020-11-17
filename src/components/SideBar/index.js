import React, {useState, useEffect} from 'react';
import Card from '.././Ui/card';
import pic2 from '../../blogpost/pic2.jpg';
import './style.css';
import blogPost from '../../data/data.json';
import { NavLink } from 'react-router-dom';


const SideBar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
       const Posts = blogPost.data;
       setPosts(posts);
       console.log(posts);
   },posts);


    return (<div className="sideContainer">
        <Card style={{marginBottom:'20px'}}>
            <div className="cardHeader">
            <span>About us</span></div>
            <div className="profileImage"><img src={pic2} alt="prof" /></div>
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
               
                {
                    posts.map(post=>{
                        return(
                            <NavLink to={`/post/${post.id}`}>
                            <div className="recentPost">
                            <h4>{post.blogTitle}</h4>
                            <span>{post.postedOn}</span></div>
                    
                            </NavLink>

                        );
                    })
                }
                </div></Card>
        </div>
      );
}
 
export default SideBar;