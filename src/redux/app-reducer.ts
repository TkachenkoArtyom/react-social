import {getUsersData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

const initialState : InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}

type SetInitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = () : SetInitializedSuccessType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
    Promise.all([dispatch(getUsersData())])
        .then(() => {
            dispatch(setInitializedSuccess());
        });
}

export default appReducer;
