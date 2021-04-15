import {createSelector} from "reselect";

const getUsersSelector = state => {
    return state.usersPage.users
}

export const getUsersFromState = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})

export const getPageSizeSelector = state => {
    return state.usersPage.pageSize
}

export const getUsersCountSelector = state => {
    return state.usersPage.usersCount
}

export const getCurrentPageSelector = state => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = state => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = state => {
    return state.usersPage.followingInProgress
}