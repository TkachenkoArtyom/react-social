import React from 'react';
import styles from "./Post.module.css";

function Post(props) {
    return (
        <div className={styles.item}>
            <img
                src="https://st2.depositphotos.com/3079665/6151/v/600/depositphotos_61516793-stock-illustration-panda-standing.jpg"/>
            {props.text}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;