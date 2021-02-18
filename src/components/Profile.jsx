import React from 'react';
import classes from './Profile.module.css';
const Profile = () => {
    return <div className={classes.content}>
        <div><div>
            <img className={classes.kana} src='https://d14zyouj9r0hpo.cloudfront.net/wp-content/uploads/2020/08/image-3.jpeg' />
        </div></div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;