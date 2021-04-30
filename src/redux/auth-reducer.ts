import {authAPI, securityAPI} from "../api/api";

const SET_USERS_DATA = 'social/auth/SET_USERS_DATA';
const IS_ERROR = 'social/auth/IS_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'social/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    error: {show: false, message: ''} as {show: boolean, message: string},
    captchaUrl: null as null | string
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action : any): InitialStateType => {
    switch (action.type) {
        case SET_USERS_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
        {
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

type SetAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataType = {
    type: typeof SET_USERS_DATA,
    payload: SetAuthUserDataPayloadType
}

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) : SetAuthUserDataType => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
});
export const getError = (error: Object) => ({type: IS_ERROR, error});
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getUsersData = () => {
    return async (dispatch: any) => {
        const response = await authAPI.me();

        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        const response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(getUsersData());
            dispatch(getError({show: false, message: ''}));
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
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
    return async (dispatch: any) => {
        const response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));

    }
}

export default authReducer;
