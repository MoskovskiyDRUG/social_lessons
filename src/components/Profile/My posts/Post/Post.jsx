import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {

    return (
                <div className={classes.item}>
                    <img src="https://pics.clipartpng.com/Pink_Flower_PNG_Clipart-173.png" alt=""/>
                    { props.message }
                    <div><span></span></div>
                </div>


    )
}

export default Post;