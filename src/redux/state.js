const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store = {
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
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
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
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this.state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this.state);
        }
    }
}

export const sendMessageCreator = () => {
    return ({
        type: SEND_MESSAGE
    })
}

export const updateNewMessageBodyCreator = (body) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    })
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