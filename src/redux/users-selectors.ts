import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(user => true)
})

export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.usersCount
}

export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getPortionSize = (state: AppStateType) => {
    return state.usersPage.portionSize
}