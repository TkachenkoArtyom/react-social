import {authAPI} from "../api/api";

const SET_USERS_DATA = 'social/auth/SET_USERS_DATA';
const IS_ERROR = 'social/auth/IS_ERROR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: {show: false, message: ''}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case IS_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
});
export const getError = (error) => ({type: IS_ERROR, error});

export const getUsersData = () => {
    return async (dispatch) => {
        let response = await authAPI.me();

        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }

    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getUsersData());
            dispatch(getError({show: false, message: ''}));
        } else {
            dispatch(getError({
                    show: true, message: response.data.messages.length
                    ? response.data.messages[0]
                    : 'Some error'
                }
            ));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;
