import React from 'react';
import classes from './Post/Post.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
                <div className={classes.posts}>
                    <Post/>
                </div>
                </div>


    )
}

export default MyPosts;