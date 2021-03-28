import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addPost, subscribe, updateNewPostText} from "./redux/state";
import store from './redux/state'

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


