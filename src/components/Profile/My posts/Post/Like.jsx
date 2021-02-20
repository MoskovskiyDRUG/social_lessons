import React from 'react';
import classes from './Post.module.css';
const Like = (props) => {

    return (
                <div className={classes.item}>
                    <div><span>Мне нравится: { props.LikeCount }</span></div>
                </div>


    )
}

export default Like;