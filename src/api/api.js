import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '2a0aa385-8fb8-470d-af2f-73ac894466a9'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(userId) {
        return instance.get('/profile/' + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('/profile/status/' + userId)
    },
    setStatus(status) {
        return instance.put('/profile/status/', {status: status})
    }
}

export const authAPI = {
    getUserData() {
        return instance.get('/auth/me')
            .then(response => response.data)
    }
}
