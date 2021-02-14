import axios from "axios";

export const ApiData = {
    async getBookDataAction(pageNum) {
        try {
            const res = await axios.get(`/api/books?page=${pageNum}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (res.message) {
                throw new Error(res.message || 'error')
            }

            return res.data

        } catch (error) {
            throw error
        }
    },
    async getFilmDataAction(pageNum) {
        try {
            const res = await axios.get(`/api/films?page=${pageNum}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (res.message) {
                throw new Error(res.message || 'front error')
            }

            return res.data
        } catch (error) {
            throw error
        }
    },
    async getSerialDataAction(pageNum) {
        try {
            const res = await axios.get(`/api/serials?page=${pageNum}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (res.message) {
                throw new Error(res.message || 'error')
            }

            return res.data
        } catch (error) {
            throw error
        }
    },
    async getGameDataAction(pageNum) {
        try {
            const res = await axios.get(`/api/games?page=${pageNum}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (res.message) {
                throw new Error(res.message || 'error')
            }

            return res.data
        } catch (error) {
            throw error
        }
    },
    async loginUserAction(userInfo) {
        try {
            const res = await axios.post(`/api/auth/login`, {
                body: userInfo
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            if (res.message) {
                throw new Error(res.message || 'front error')
            }
            return res.data
        } catch (error) {
            return error.response
        }
    },
    async registerUserAction(userInfo) {
        try {
            const res = await axios.post(`/api/auth/register`, {
                body: userInfo
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            return res
        } catch (error) {
            return error.response
        }
    },
    async setFavoriteDataAction(userInfo) {
        try {
            const res = await axios.post(
                '/api/favorites/setFavorite', {
                    body: userInfo
                }, {
                    headers: {
                        'x-access-token': localStorage.getItem('token'),
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            if (!res) {
                throw new Error(res.message || 'fav set error')
            }

            return res.data.duplicate ? false : true
        } catch (error) {
            throw error
        }
    },
    async getFavoriteDataAction(pageNum, userid) {
        try {
            const res = await axios.get(`/api/favorites/getFavorite`, {
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
            return res.data
        } catch (error) {
            throw error
        }
    },
    async deleteFavoriteDataAction(itemId, userId) {
        try {
            const res = await axios.post(
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
            if (!res) {
                throw new Error(res.message || 'fav set error')
            }

            return true
        } catch (error) {
            throw error
        }
    },
    async getStatisticAction() {
        try {
            const res = await axios.get('/api/statistic', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            return res.data
        } catch (error) {
            throw error
        }
    }
}