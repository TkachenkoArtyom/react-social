import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;