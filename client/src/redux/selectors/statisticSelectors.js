
export const booksStat = state => {
    return state.statisticReducer.booksCount
}

export const filmsStat = state => {
    return state.statisticReducer.filmsCount
}

export const serialsStat = state => {
    return state.statisticReducer.serialsCount
}

export const gamesStat = state => {
    return state.statisticReducer.gamesCount
}

export const booksRecentStat = state => {
    return state.statisticReducer.booksRecentCount
}

export const filmsRecentStat = state => {
    return state.statisticReducer.filmsRecentCount
}

export const serialsRecentStat = state => {
    return state.statisticReducer.serialsRecentCount
}

export const gamesRecentStat = state => {
    return state.statisticReducer.gamesRecentCount
}