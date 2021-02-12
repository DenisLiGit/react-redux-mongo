import axios from "axios";

// todo придумать как апдейтить токет при закидывании в стореж
// const instance = axios.create({
//     baseURL: '/api',
//     headers: {
//         'x-access-token': localStorage.getItem('token'),
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });

export const ApiData = {
    getBookDataAction(pageNum) {
        return axios.get(`/api/books?page=${pageNum}`, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.message) {
                    throw new Error(res.message || 'error')
                }

                return res.data
            })
            .catch(error => {
                throw error
            })
    },
    getFilmDataAction(pageNum) {
        return axios.get(`/api/films?page=${pageNum}`, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.message) {
                    throw new Error(res.message || 'front error')
                }

                return res.data
            })
            .catch(error => {
                throw error
            })
    },
    getSerialDataAction(pageNum) {
        return axios.get(`/api/serials?page=${pageNum}`, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.message) {
                    throw new Error(res.message || 'error')
                }

                return res.data
            })
            .catch(error => {
                throw error
            })
    },
    getGameDataAction(pageNum) {
        return axios.get(`/api/games?page=${pageNum}`, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.message) {
                    throw new Error(res.message || 'error')
                }

                return res.data
            })
            .catch(error => {
                throw error
            })
    },
    loginUserAction(userInfo) {
        return axios.post(`/api/auth/login`, {
            body: userInfo
        }, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.message) {
                    throw new Error(res.message || 'front error')
                }
                return res.data
            })
            .catch(error => {
                return error.response
            })
    },
    registerUserAction(userInfo) {
        return axios.post(`/api/auth/register`, {
            body: userInfo
        }, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res
            })
            .catch(error => {
                return error.response
            })
    },
    setFavoriteDataAction(userInfo) {
        return axios.post(
            '/api/favorites/setFavorite', {
                body: userInfo
            }, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (!res) {
                    throw new Error(res.message || 'fav set error')
                }

                return res.data.duplicate ? false : true
            })
            .catch(error => {
                throw error
            })
    },
    getFavoriteDataAction(pageNum, userid) {
        return axios.get(`/api/favorites/getFavorite`, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            params: {
                page: pageNum,
                userid: userid
            }
        })
            .then(res => {
                return res.data
            })
            .catch(error => {
                throw error
            })
    },
    deleteFavoriteDataAction(itemId, userId) {
        return axios.post(
            '/api/favorites/deleteFavorite', {
                itemId,
                userId
            }, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (!res) {
                    throw new Error(res.message || 'fav set error')
                }

                return true
            })
            .catch(error => {
                throw error
            })
    },
    getStatisticAction() {
        return axios.get('/api/statistic', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.data
            })
            .catch(error => {
                throw error
            })
    }
}