import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    headers: {
        'x-access-token': localStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const ApiData = {
    getBookDataAction (pageNum) {
        return instance.get(`/books?page=${pageNum}`)
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
    getFilmDataAction (pageNum) {
        return instance.get(`/films?page=${pageNum}`)
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
    getSerialDataAction (pageNum) {
        return instance.get(`/serials?page=${pageNum}`)
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
    getGameDataAction (pageNum) {
        return instance.get(`/games?page=${pageNum}`)
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
    loginUserAction (userInfo) {
        return instance.post(`/auth/login`, {
            body: userInfo
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
    registerUserAction (userInfo) {
        return instance.post(`/auth/register`, {
            body: userInfo
        })
            .then(res => {
                return res
            })
            .catch(error => {
                return error.response
            })
    },
    setFavoriteDataAction (userInfo) {
        return instance.post(
            '/favorites/setFavorite', {
                body: userInfo
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
    getFavoriteDataAction (pageNum, userid) {
        return instance.get(`/favorites/getFavorite`, {
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
    deleteFavoriteDataAction (itemId, userId) {
        return instance.post(
            '/favorites/deleteFavorite', {
                itemId,
                userId
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
    getStatisticAction () {
        return instance.get('/statistic')
            .then(res => {
                return res.data
            })
            .catch(error => {
                throw error
            })
    }
}