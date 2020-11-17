import React, {useState, useEffect} from 'react';
import Card from '.././Ui/card';
import './style.css';
import blogPost from '../../data/data.json';
import photos from '../../blogpost/photos.jpg';

const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle : " ",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText:""

    });
    const [postid, setPostid] = useState('');
    useEffect(()=>{

       const postid = props.match.params.postid;
       const post = blogPost.data.find(post=> post.id == postid);
       setPost(post);
       //console.log(`${blogPost}from blogPost`);
       setPostid(postid)
   },[post, props.match.params.postid]);
   
    console.log(post);
    return (<Card style={{margin:'20px'}} className="blogpost">
        <div className="blogMain">
<span className="group">{post.blogCategory}</span>
<h2 className="title">{post.blogTitle}</h2>
        <span className="ondate">posted on {post.postedOn}
</span>

        </div>
       <div className="imagecontainer"><img src={photos} alt="hello"/></div>
       <div className="postContent">
           <h3>Post Title</h3>
           <p>lorem ipsum</p>
       </div>
    </Card> );
}
 
export default BlogPost ;