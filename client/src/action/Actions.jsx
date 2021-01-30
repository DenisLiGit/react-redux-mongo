export const getBookDataAction = async (pageNum) => {
    return await fetch(`/api/books?page=${pageNum}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                throw new Error(data.message || 'error')
            }

            return data
        })
        .catch(error => {
            throw error
        })
}

export const getFilmDataAction = async (pageNum) => {
    return await fetch(`/api/films?page=${pageNum}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                throw new Error(data.message || 'front error')
            }

            return data
        })
        .catch(error => {
            throw error
        })
}

export const getSerialDataAction = async (pageNum) => {
    return await fetch(`/api/serials?page=${pageNum}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                throw new Error(data.message || 'error')
            }

            return data
        })
        .catch(error => {
            throw error
        })
}

export const getGameDataAction = async (pageNum) => {
    return await fetch(`/api/games?page=${pageNum}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                throw new Error(data.message || 'error')
            }

            return data
        })
        .catch(error => {
            throw error
        })
}

export const loginUserAction = async (userInfo) => {
    return await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                throw new Error(data.message || 'front error')
            }

            localStorage.setItem("token", data.token)
            localStorage.setItem("userid", data.userId)

            return data
        })
        .catch(error => {
            throw error
        })
}

export const registerUserAction = async (userInfo) => {
    return await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log('register success', data)
        })
        .catch(error => {
            throw error
        })
}

export const setFavoriteDataAction = async (userInfo) => {
    return await fetch(
        '/api/favorites/setFavorite', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json)
        .then(data => {
            if (!data) {
                throw new Error(data.message || 'fav set error')
            }
        })
        .catch(error => {
            throw error
        })
}

export const getFavoriteDataAction = async (pageNum) => {
    return await fetch(`/api/favorites/getFavorite?page=${pageNum}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                throw new Error(data.message || 'error')
            }

            return data
        })
        .catch(error => {
            throw error
        })
}

export const deleteFavoriteDataAction = async (itemId) => {
    return await fetch(
        '/api/favorites/deleteFavorite', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(itemId)
    })
        .then(res => res.json())
        .then(data => {
            if (!data) {
                throw new Error(data.message || 'fav set error')
            }

            return true
        })
        .catch(error => {
            throw error
        })
}