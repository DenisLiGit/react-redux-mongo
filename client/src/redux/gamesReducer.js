import {ApiData} from "../api/Api";
import {loaderAC} from "./contentReducer";

const SET_GAME_DATA = "SET-GAME-DATA"
const SET_GAME_PAGE = "SET-GAME-PAGE"
const SET_GAME_TOTAL_PAGE = "SET-GAME-TOTAL-PAGE"
const startPage = 1

const initialState = {
    games: [ ],
    gamesPageNum: startPage,
    gamesTotalPages: startPage,
}

const gamesReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_GAME_DATA:
            return {
                ...store,
                games: [
                    ...action.value.map(item => {
                        return {
                            title: {
                                name: 'Название',
                                content: item.title
                            },
                            description: {
                                name: 'Описание',
                                content: item.description
                            },
                            link: {
                                name: 'Ссылка',
                                content: item.link
                            },
                            img: {
                                content: item.image || null
                            },
                            id: item._id
                        }
                    })
                ]
            }
        case SET_GAME_PAGE:
            return {
                ...store,
                gamesPageNum: action.value
            }
        case SET_GAME_TOTAL_PAGE:
            return {
                ...store,
                gamesTotalPages: action.value
            }
        default: return store
    }
}

export const setGameDataAC = (value) => ({
    type: SET_GAME_DATA, value
})

export const gamesPageAC = (value) => ({
    type: SET_GAME_PAGE, value
})

export const gamesTotalPagesAC = (value) => ({
    type: SET_GAME_TOTAL_PAGE, value
})

export const getGameThunk = (page) => (dispatch) => {
    dispatch(loaderAC(true))
    ApiData.getGameDataAction(page).then(data => {
        dispatch(setGameDataAC(data.games))
        dispatch(gamesTotalPagesAC(data.pageCount))
        dispatch(loaderAC(false))
    })
}

export default  gamesReducer