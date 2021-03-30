const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const store = {
    _callSubscriber() {
        console.log('State changed')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Привет', likesCount: 8},
                {id: 2, text: 'Я трейдер, мне 8 лет', likesCount: 13},
                {id: 3, text: 'А я Senior, мне 12 лет', likesCount: 10}
            ],
            newPostText: 'Tema-Boxing'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Kirill'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Misha'},
                {id: 6, name: 'Artyom'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yes'},
                {id: 3, message: 'some'},
                {id: 4, message: 'node'},
                {id: 5, message: 'GG'},
                {id: 6, message: 'Yo'},
            ],
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type == 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likesCount: 5
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type == 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => {
    return ({
            type: ADD_POST
        }
    )
}

export const updateNewPostTextActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: text
        }
    )
}

window.store = store;
export default store;