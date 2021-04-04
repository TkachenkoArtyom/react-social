const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Привет', likesCount: 8},
        {id: 2, text: 'Я трейдер, мне 8 лет', likesCount: 13},
        {id: 3, text: 'А я Senior, мне 12 лет', likesCount: 10}
    ],
    newPostText: 'Tema-Boxing'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likesCount: 5
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;
