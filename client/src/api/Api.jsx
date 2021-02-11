import axios from "axios";

export const ApiData = {
    getBookDataAction (pageNum) {
        return axios.get(`/api/books?page=${pageNum}`)
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
        return axios.get(`/api/films?page=${pageNum}`)
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
        return axios.get(`/api/serials?page=${pageNum}`)
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
        return axios.get(`/api/games?page=${pageNum}`)
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
        return axios.post(`/api/auth/login`, {
            body: userInfo
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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
    registerUserAction (userInfo) {
        return axios.post(`/api/auth/register`, {
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
        return axios.post(
            '/api/favorites/setFavorite', {
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
        return axios.get(`/api/favorites/getFavorite`, {
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
        return axios.post(
            '/api/favorites/deleteFavorite', {
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
        return axios.get('/api/statistic')
            .then(res => {
                return res.data
            })
            .catch(error => {
                throw error
            })
    }
}