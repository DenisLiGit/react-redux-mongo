import {ApiData} from "../api/Api";
const SET_BOOK_STAT = "SET-BOOK-STAT"
const SET_FILM_STAT = "SET-FILM-STAT"
const SET_SERIAL_STAT = "SET-SERIAL-STAT"
const SET_GAME_STAT = "SET-GAME-STAT"
const SET_BOOK_RECENT_STAT = "SET-BOOK-RECENT-STAT"
const SET_FILM_RECENT_STAT = "SET-FILM-RECENT-STAT"
const SET_SERIAL_RECENT_STAT = "SET-SERIAL-RECENT-STAT"
const SET_GAME_RECENT_STAT = "SET-GAME-RECENT-STAT"

const initialState = {
    booksCount: null,
    filmsCount: null,
    serialsCount: null,
    gamesCount: null,
    booksRecentCount: null,
    filmsRecentCount: null,
    serialsRecentCount: null,
    gamesRecentCount: null
}

const statisticReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_BOOK_STAT:
            return {
                ...store,
                booksCount: action.value
            }
        case SET_FILM_STAT:
            return {
                ...store,
                filmsCount: action.value
            }
        case SET_SERIAL_STAT:
            return {
                ...store,
                serialsCount: action.value
            }
        case SET_GAME_STAT:
            return {
                ...store,
                gamesCount: action.value
            }
        case SET_BOOK_RECENT_STAT:
            return {
                ...store,
                booksRecentCount: action.value
            }
        case SET_FILM_RECENT_STAT:
            return {
                ...store,
                filmsRecentCount: action.value
            }
        case SET_SERIAL_RECENT_STAT:
            return {
                ...store,
                serialsRecentCount: action.value
            }
        case SET_GAME_RECENT_STAT:
            return {
                ...store,
                gamesRecentCount: action.value
            }
        default: return store
    }
}

export const setBookStatAC = (value) => ({
    type: SET_BOOK_STAT, value
})
export const setFilmStatAC = (value) => ({
    type: SET_FILM_STAT, value
})
export const setSerialStatAC = (value) => ({
    type: SET_SERIAL_STAT, value
})
export const setGameStatAC = (value) => ({
    type: SET_GAME_STAT, value
})
export const setBookRecentStatAC = (value) => ({
    type: SET_BOOK_RECENT_STAT, value
})
export const setFilmRecentStatAC = (value) => ({
    type: SET_FILM_RECENT_STAT, value
})
export const setSerialRecentStatAC = (value) => ({
    type: SET_SERIAL_RECENT_STAT, value
})
export const setGameRecentStatAC = (value) => ({
    type: SET_GAME_RECENT_STAT, value
})

export const getStatisticThunk = () => async (dispatch) => {
    const data = await ApiData.getStatisticAction()
    dispatch(setBookStatAC(data.booksCount))
    dispatch(setFilmStatAC(data.filmsCount))
    dispatch(setSerialStatAC(data.serialsCount))
    dispatch(setGameStatAC(data.gamesCount))
    dispatch(setBookRecentStatAC(data.recent.recentBook))
    dispatch(setFilmRecentStatAC(data.recent.recentFilm))
    dispatch(setSerialRecentStatAC(data.recent.recentSerial))
    dispatch(setGameRecentStatAC(data.recent.recentGame))
}

export default statisticReducer