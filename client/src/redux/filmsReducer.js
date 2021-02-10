import {ApiData} from "../api/Api";
import {loaderAC} from "./contentReducer";

const SET_FILM_DATA = "SET-FILM-DATA"
const SET_FILM_PAGE = "SET-FILM-PAGE"
const SET_FILM_TOTAL_PAGE = "SET-FILM-TOTAL-PAGE"
const startPage = 1

const initialState = {
    films: [ ],
    filmsPageNum: startPage,
    filmsTotalPages: startPage,
}

const filmsReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_FILM_DATA:
            return {
                ...store,
                films: [
                    ...action.value.map((item) => {
                        return {
                            title: {
                                name: 'Название',
                                content: item.title
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
                            id: item._id
                        }
                    })
                ]
            }
        case SET_FILM_PAGE:
            return {
                ...store,
                filmsPageNum: action.value
            }
        case SET_FILM_TOTAL_PAGE:
            return {
                ...store,
                filmsTotalPages: action.value
            }
        default: return store
    }
}

export const setFilmDataAC = (value) => ({
    type: SET_FILM_DATA, value
})

export const filmsPageAC = (value) => ({
    type: SET_FILM_PAGE, value
})

export const filmsTotalPagesAC = (value) => ({
    type: SET_FILM_TOTAL_PAGE, value
})

export const getFilmThunk = (page) => (dispatch) => {
    dispatch(loaderAC(true))
    ApiData.getFilmDataAction(page).then(data => {
        dispatch(setFilmDataAC(data.films))
        dispatch(filmsTotalPagesAC(data.pageCount))
        dispatch(loaderAC(false))
    })
}

export default  filmsReducer