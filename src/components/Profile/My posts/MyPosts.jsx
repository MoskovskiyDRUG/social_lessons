import React from 'react';
import classes from './Post/Post.module.css';
import Post from './Post/Post';
import Like from "./Post/Like";
const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
                <div className={classes.posts}>
                    <Post message ="Hi, how are you?"/>
                    <Like count='5'/>
                    <Post message = "Its my new post!"/>
                    <Like count='10'/>


                </div>

                </div>


    )
}

export default MyPosts;