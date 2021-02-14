export const getFavorites = state => {
    return state.favoritesReducer.favorites
}

export const favoritesPageNum = state => {
    return state.favoritesReducer.favoritesPageNum
}

export const updateFavorites = state => {
    return state.favoritesReducer.updateFavorites
}

export const favoritesTotalPages = state => {
    return state.favoritesReducer.favoritesTotalPages
}

export const favErrorMessage = state => {
    return state.favoritesReducer.favErrorMessage
}