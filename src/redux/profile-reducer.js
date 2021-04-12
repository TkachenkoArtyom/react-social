import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Привет', likesCount: 8},
        {id: 2, text: 'Я трейдер, мне 8 лет', likesCount: 13},
        {id: 3, text: 'А я Senior, мне 12 лет', likesCount: 10}
    ],
    newPostText: 'Tema-Boxing',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateUserStatus = (status) => ({type: SET_STATUS, status});

export const setProfile = (userId) => (dispatch) => {
    profileAPI.setProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(updateUserStatus(response.data));
        })
}

export const setStatus = (status) => (dispatch) => {
    profileAPI.setStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(updateUserStatus(status));
            }
        })
}

export default profileReducer;
