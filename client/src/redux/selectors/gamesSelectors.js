export const getGames = state => {
    return state.gamesReducer.games
}

export const gamesPageNum = state => {
    return state.gamesReducer.gamesPageNum
}

export const gamesTotalPages = state => {
    return state.gamesReducer.gamesTotalPages
}
