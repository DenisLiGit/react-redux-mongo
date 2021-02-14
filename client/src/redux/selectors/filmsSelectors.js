export const getFilms = state => {
    return state.filmsReducer.films
}

export const filmsPageNum = state => {
    return state.filmsReducer.filmsPageNum
}

export const filmsTotalPages = state => {
    return state.filmsReducer.filmsTotalPages
}

export const getFilmsCount = state => {
    return state.filmsReducer.filmsCount
}