import {ApiData} from "../api/Api";
import {loaderAC} from "./contentReducer";

const SET_FAVORITES = 'SET-FAVORITES'
const DEL_FAVORITES = 'DEL-FAVORITES'
const NAME = 'NAME'
const AUTHOR = 'AUTHOR'
const GENRE = 'GENRE'
const DESCR = 'DESCR'
const SET_FAVORITES_PAGE = "SET-FAVORITES-PAGE"
const SET_FAVORITES_TOTAL_PAGE = "SET-FAVORITES-TOTAL-PAGE"
const UPDATE_FAVORITES = 'UPDATE-FAVORITES'
const FAV_ERROR_MESSAGE = 'FAV-ERROR-MESSAGE'
const startPage = 1

const initialState = {
    customFavorites: {
        genre: 'фэнтези',
        genreOptions: [
            {
                value: 'фэнтези',
                label: 'фэнтези'
            },
            {
                value: 'фантастика',
                label: 'фантастика'
            },
        ],
    },
    favorites: [],
    favoritesPageNum: startPage,
    favoritesTotalPages: startPage,
    updateFavorites: false,
    saveFavorites: true,
    favErrorMessage: false
}

const favoritesReducer = (store = initialState, action) => {
    switch (action.type) {
        case NAME:
            return {
                ...store,
                customFavorites: {...store.customFavorites, name: action.value}
            }
        case AUTHOR:
            return {
                ...store,
                customFavorites: {...store.customFavorites, author: action.value}
            }
        case GENRE:
            return {
                ...store,
                customFavorites: {...store.customFavorites, genre: action.value}
            }
        case DESCR:
            return {
                ...store,
                customFavorites: {...store.customFavorites, description: action.value}
            }
        case SET_FAVORITES:
            return {
                ...store,
                favorites: [
                    ...action.items.map((item) => {
                        return {
                            title: {
                                name: 'Название',
                                content: item.title
                            },
                            cycle: {
                                name: 'Цикл',
                                content: item.cycle
                            },
                            author: {
                                name: 'Автор',
                                content: item.author
                            },
                            genre: {
                                name: 'Жанр',
                                content: item.genre
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
        case DEL_FAVORITES:
            return {
                ...store,
                favorites: [store.favorites.map((item) => {
                    if (item.id !== action.id) {
                        return item;
                    }
                    return null
                })]
            }
        case SET_FAVORITES_PAGE:
            return {
                ...store,
                favoritesPageNum: action.value
            }
        case SET_FAVORITES_TOTAL_PAGE:
            return {
                ...store,
                favoritesTotalPages: action.value
            }
        case UPDATE_FAVORITES: {
            return {
                ...store,
                updateFavorites: action.value
            }
        }
        case FAV_ERROR_MESSAGE: {
            return {
                ...store,
                favErrorMessage: action.value
            }
        }
        default:
            return {...store}
    }
}

export const actionSetFavorites = (items) => ({
    type: SET_FAVORITES, items
})

export const favoritesPageAC = (value) => ({
    type: SET_FAVORITES_PAGE, value
})

export const favoritesTotalPagesAC = (value) => ({
    type: SET_FAVORITES_TOTAL_PAGE, value
})

export const updateFavorites = (value) => ({
    type: UPDATE_FAVORITES, value
})

export const favErrorMessageAC = (value) => ({
    type:  FAV_ERROR_MESSAGE, value
})

export const getFavoriteThunk = (page, userid) => async (dispatch) => {
    dispatch(loaderAC(true))
    const data = await ApiData.getFavoriteDataAction(page, userid)
    if (!data.message) {
        dispatch(actionSetFavorites(data.favorites))
        dispatch(favoritesTotalPagesAC(data.pageCount))
        dispatch(loaderAC(false))
        dispatch(updateFavorites(false))
    }
    dispatch(favErrorMessageAC(data.message))
}

export const deleteFavoriteThunk = (id, userId) => (dispatch) => {
    const data = ApiData.deleteFavoriteDataAction(id, userId)
    if (data) {
        dispatch(updateFavorites(data))
    }
}

export const setFavoriteThunk = (cardInfo) => (dispatch) => {
    ApiData.setFavoriteDataAction(cardInfo).then()
}

export default favoritesReducer