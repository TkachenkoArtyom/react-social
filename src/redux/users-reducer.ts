import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    portionSize: 10
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: Actionstypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                usersCount: action.count
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetch
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

type FollowSuccessType = { type: typeof FOLLOW, userId: number };
type UnfollowSuccessType = { type: typeof UNFOLLOW, userId: number };
type SetUsersType = { type: typeof SET_USERS, users: Array<UserType> };
type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number };
type SetTotalCountUsersType = { type: typeof SET_TOTAL_USERS_COUNT, count: number };
type ToggleIsFetchingType = { type: typeof TOGGLE_FETCHING, isFetch: boolean };
type ToggleFollowingProgressType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing: boolean, userId: number };

type Actionstypes = FollowSuccessType |
    UnfollowSuccessType |
    SetUsersType |
    SetCurrentPageType |
    SetTotalCountUsersType |
    ToggleIsFetchingType |
    ToggleFollowingProgressType

export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountUsers = (count: number): SetTotalCountUsersType => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetch: boolean): ToggleIsFetchingType => ({type: TOGGLE_FETCHING, isFetch});
export const toggleFollowingProgress = (isFollowing: boolean, userId: any): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId
});

type DispatchType = Dispatch<Actionstypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Actionstypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let response = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalCountUsers(response.totalCount));
    }
}

const _toggleFollow = async (dispatch: DispatchType,
                             userId: number,
                             apiMethod: any,
                             actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        _toggleFollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        _toggleFollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;
