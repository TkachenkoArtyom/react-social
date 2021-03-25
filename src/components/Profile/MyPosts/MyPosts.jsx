import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {
    return (
        <div>
            all Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={styles.posts}>

                <Post text='Привет'/>
                <Post text='Я трейдер, мне 8 лет'/>
                <Post text='А я Senior, мне 12 лет'/>

            </div>
        </div>
    );
}

export default MyPosts;