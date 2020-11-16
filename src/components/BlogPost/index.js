import React from 'react';
import Card from '.././Ui/card';
import './style.css';
import photos from '../../blogpost/photos.jpg';

const BlogPost = () => {
    return (<Card style={{margin:'20px'}} className="blogpost">
        <div className="blogMain">
        <span className="group">featured</span>
        <h2 className="title">Fitness is the Mantra</h2>
        <span className="ondate">posted onMay 03, 2016 bySora Blogging Tips
</span>

        </div>
       <div className="imagecontainer"><img src={photos} alt="picture"/></div>
    </Card> );
}
 
export default BlogPost ;