const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            userPhoto: 'https://www.thefashionisto.com/wp-content/uploads/2019/07/Male-Model-Businessman-Suit.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'Im a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            userPhoto: 'https://www.thefashionisto.com/wp-content/uploads/2019/07/Male-Model-Businessman-Suit.jpg',
            followed: true,
            fullName: 'Artyom',
            status: 'Im a boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            userPhoto: 'https://www.thefashionisto.com/wp-content/uploads/2019/07/Male-Model-Businessman-Suit.jpg',
            followed: false,
            fullName: 'Maskim',
            status: 'Im a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
});

export const setUsersAC = (users) => ({
    type: SET_USERS, users
});

export default usersReducer;
