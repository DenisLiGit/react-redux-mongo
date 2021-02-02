import {ApiData} from "../api/Api";
import {loaderAC} from "./contentReducer";

const CREATE_CUSTOM_BOOK = 'CREATE_CUSTOM_BOOK'
const CLEAR_CUSTOM_BOOK = 'CLEAR_CUSTOM_BOOK'
const SET_FAVORITES = 'SET-FAVORITES'
const DEL_FAVORITES = 'DEL-FAVORITES'
const NAME = 'NAME'
const AUTHOR = 'AUTHOR'
const JANRA = 'JANRA'
const DESCR = 'DESCR'
const SET_FAVORITES_PAGE = "SET-FAVORITES-PAGE"
const SET_FAVORITES_TOTAL_PAGE = "SET-FAVORITES-TOTAL-PAGE"
const UPDATE = 'UPDATE'
const startPage = 1

const initialState = {
    customFavorites: {
        name: '',
        author: '',
        janra: 'фэнтези',
        janraOptions: [
            {
                value: 'фэнтези',
                label: 'фэнтези'
            },
            {
                value: 'фантастика',
                label: 'фантастика'
            },
        ],
        description: '',
        link: ''
    },
    favorites: [],
    favoritesPageNum: startPage,
    favoritesTotalPages: startPage,
    update: false,
    saveFavorites: true
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
        case JANRA:
            return {
                ...store,
                customFavorites: {...store.customFavorites, janra: action.value}
            }
        case DESCR:
            return {
                ...store,
                customFavorites: {...store.customFavorites, description: action.value}
            }
        case CREATE_CUSTOM_BOOK:
            return {
                ...store,
                favorites: [{
                    title: {
                        name: 'Название',
                        content: store.customFavorites.name
                    },
                    author: {
                        name: 'Автор',
                        content: store.customFavorites.author
                    },
                    janra: {
                        name: 'Жанр',
                        content: store.customFavorites.janra
                    },
                    janraOptions: [
                        {
                            value: 'фэнтези',
                            label: 'фэнтези'
                        },
                        {
                            value: 'фантастика',
                            label: 'фантастика'
                        },
                    ],
                    description: {
                        name: 'Описание',
                        content: store.customFavorites.description
                    },
                    link: {
                        content: 'test.com'
                    }
                },
                    ...store.favorites
                ]
            }
        case CLEAR_CUSTOM_BOOK:
            return {
                ...store,
                customFavorites: {
                    name: '',
                    author: '',
                    janra: 'фэнтези',
                    janraOptions: [
                        {
                            value: 'фэнтези',
                            label: 'фэнтези'
                        },
                        {
                            value: 'фантастика',
                            label: 'фантастика'
                        },
                    ],
                    description: ''
                }
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
        case UPDATE: {
            return {
                ...store,
                update: action.value
            }
        }
        default:
            return {...store}
    }
}

export const actionCreateCustomBook = () => ({
    type: CREATE_CUSTOM_BOOK
})
export const actionClearCustomBook = () => ({
    type: CLEAR_CUSTOM_BOOK
})
export const actionSetFavorites = (items) => ({
    type: SET_FAVORITES, items
})
export const delFavoritesAC = (id) => ({
    type: DEL_FAVORITES, id
})

export const actionSetName = (value) => ({
    type: NAME, value: value
})

export const actionSetAuthor = (value) => ({
    type: AUTHOR, value: value
})

export const actionSetJanra = (value) => ({
    type: JANRA, value: value
})

export const actionSetDescr = (value) => ({
    type: DESCR, value: value
})

export const favoritesPageAC = (value) => ({
    type: SET_FAVORITES_PAGE, value
})

export const favoritesTotalPagesAC = (value) => ({
    type: SET_FAVORITES_TOTAL_PAGE, value
})

export const favoritesUpdate = (value) => ({
    type: UPDATE, value
})

export const getFavoriteThunk = (page) => (dispatch) => {
    dispatch(loaderAC(true))
    ApiData.getFavoriteDataAction(page).then(data => {
        dispatch(actionSetFavorites(data.favorites))
        dispatch(favoritesTotalPagesAC(data.pageCount))
        dispatch(loaderAC(false))
        dispatch(favoritesUpdate(false))
    })
}

export const deleteFavoriteThunk = (id) => (dispatch) => {
    ApiData.deleteFavoriteDataAction(id).then(res => {
        if (res) {
            dispatch(favoritesUpdate(true))
        }
    })
}

export const setFavoriteThunk = (cardInfo) => (dispatch) => {
    ApiData.setFavoriteDataAction(cardInfo).then()
}

export default favoritesReducer