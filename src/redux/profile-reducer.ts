import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, text: 'Call me!', likesCount: 8},
        {id: 2, text: 'Hi, how are you?', likesCount: 13},
        {id: 3, text: 'Hi, my name is Dasha', likesCount: 10}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                text: action.post,
                likesCount: 5
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
            case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    }
}

type AddPostActionCreatorType = { type: typeof ADD_POST, post: string }
type SetUserProfileType = { type: typeof SET_USER_PROFILE, profile: ProfileType }
type UpdateUserStatusType = { type: typeof SET_STATUS, status: string }
type DeletePostType = { type: typeof DELETE_POST, postId: number }
type SavePhotoSuccessType = { type: typeof SAVE_PHOTO_SUCCESS, photos: PhotosType }

export const addPostActionCreator = (post: string): AddPostActionCreatorType => ({type: ADD_POST, post});
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const updateUserStatus = (status: string): UpdateUserStatusType => ({type: SET_STATUS, status});
export const deletePost = (postId: number): DeletePostType => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const setProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.setProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(updateUserStatus(response.data));
}

export const setStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.setStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(updateUserStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const response = await profileAPI.saveProfile(profile);
    const userId = getState().auth.userId;
    if (response.data.resultCode === 0) {
        dispatch(setProfile(userId));
    }
}

export default profileReducer;
