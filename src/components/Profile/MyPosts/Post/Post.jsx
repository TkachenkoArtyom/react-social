import React from 'react';
import styles from "./Post.module.css";

function Post(props) {
    return (
        <div>
            <div className={styles.item}>
                <img
                    src="https://st2.depositphotos.com/3079665/6151/v/600/depositphotos_61516793-stock-illustration-panda-standing.jpg" alt="avatar"/>
                {props.text}
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;