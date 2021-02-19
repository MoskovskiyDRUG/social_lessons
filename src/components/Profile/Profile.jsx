import React from 'react';
import classes from './Profile.module.css';
import Post from "./My posts/Post/Post";
const Profile = () => {
    return <div className={classes.content}>
        <div><div>
            <img className={classes.kana} src='https://d14zyouj9r0hpo.cloudfront.net/wp-content/uploads/2020/08/image-3.jpeg' />
        </div></div>
        <div>
            ava + description
        </div>
       <Post/>
    </div>
}

export default Profile;